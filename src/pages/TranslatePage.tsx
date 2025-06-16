import { useState } from "react";
import { FileUpload } from "../components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";

// Pour lire le nombre de pages d'un PDF côté client
const getPdfPageCount = async (file: File): Promise<number | null> => {
  try {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    return pdf.numPages;
  } catch {
    return null;
  }
};

const LANGUAGES = [
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  // ...ajoute d'autres langues si besoin
];

const MANGA_LIST = [
  "Solo Leveling",
  "One Piece",
  "Jujutsu Kaisen",
  "Tower of God",
  "Demon Slayer",
  "My Hero Academia",
  "Attack on Titan",
  "Noblesse",
  "The God of High School",
  "Spy x Family",
  "Blue Lock",
  "Chainsaw Man",
  "Lookism",
  "Wind Breaker",
  "Omniscient Reader",
  "Eleceed",
  "Kaiju No. 8",
  "Mashle",
  "Kingdom",
  "Black Clover"
];

const TranslatePage = () => {
  const [baseLang, setBaseLang] = useState<string>("ja");
  const [targetLang, setTargetLang] = useState<string>("en");
  const [chapter, setChapter] = useState<string>("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedManga, setSelectedManga] = useState<string | null>(null);

  const handleFileChange = async (file?: File) => {
    setPdfFile(file || null);
    setPageCount(null);
    if (file) {
      setLoadingPdf(true);
      const count = await getPdfPageCount(file);
      setPageCount(count);
      setLoadingPdf(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoute ici la logique d'envoi (Supabase, etc.)
    // ...
  };

  const filteredManga = MANGA_LIST.filter(m => m.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4 mt-20">
        <h1 className="text-3xl font-bold mb-4">Start a New Translation</h1>
        <div className="mb-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            <li>All fields are required to start a translation.</li>
            <li>The PDF must contain only the pages of the chapter to translate.</li>
            <li>Choose the correct source and target language.</li>
            <li>Only PDF files are accepted.</li>
          </ul>
        </div>
        {/* Barre de recherche manga centrée */}
        <div className="flex flex-col items-center mb-10">
          <Input
            type="text"
            placeholder="Search for a manga or webtoon..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setSelectedManga(null);
            }}
            className="w-full max-w-md text-lg px-6 py-4 rounded-2xl shadow-md border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition mb-2"
          />
          {/* Liste des résultats */}
          {search && filteredManga.length > 0 && (
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border mt-2 z-10">
              {filteredManga.map(manga => (
                <button
                  key={manga}
                  className={`w-full text-left px-6 py-3 hover:bg-purple-50 transition font-medium ${selectedManga === manga ? 'bg-purple-100 text-purple-700' : ''}`}
                  onClick={() => setSelectedManga(manga)}
                  type="button"
                >
                  {manga}
                </button>
              ))}
            </div>
          )}
          {/* Affichage du manga sélectionné */}
          {selectedManga && (
            <div className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 text-purple-700 font-bold text-lg shadow border border-purple-200 flex items-center gap-2">
              <span>Selected:</span> <span className="truncate max-w-[200px]">{selectedManga}</span>
              <button
                className="ml-2 text-xs text-purple-500 hover:text-pink-500 font-bold px-2 py-1 rounded transition"
                onClick={() => setSelectedManga(null)}
                type="button"
              >
                Clear
              </button>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Colonne 1 */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="base-lang">Source language</Label>
                <Select value={baseLang} onValueChange={setBaseLang}>
                  <SelectTrigger id="base-lang" className="mt-1">
                    <SelectValue placeholder="Select source language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map(lang => (
                      <SelectItem key={lang.code} value={lang.code}>{lang.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="target-lang">Target language</Label>
                <Select value={targetLang} onValueChange={setTargetLang}>
                  <SelectTrigger id="target-lang" className="mt-1">
                    <SelectValue placeholder="Select target language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map(lang => (
                      <SelectItem key={lang.code} value={lang.code}>{lang.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="chapter">Chapter number</Label>
                <Input
                  id="chapter"
                  type="number"
                  min={1}
                  placeholder="e.g. 12"
                  value={chapter}
                  onChange={e => setChapter(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            {/* Colonne 2 */}
            <div>
              <Label>Upload PDF</Label>
              <div className="mt-2">
                <FileUpload

                />
              </div>
              <div className="mt-4 text-sm text-gray-700 min-h-[24px]">
                {loadingPdf && (
                  <span className="flex items-center gap-2 text-purple-600">
                    <Loader2 className="animate-spin w-4 h-4" /> Loading PDF...
                  </span>
                )}
                {!loadingPdf && pageCount !== null && (
                  <span>
                    Number of pages: <span className="font-semibold">{pageCount}</span>
                  </span>
                )}
                {!loadingPdf && pdfFile && pageCount === null && (
                  <span className="text-red-600">Unable to read PDF page count.</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="w-full md:w-auto">
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TranslatePage;
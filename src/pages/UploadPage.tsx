import { useState } from "react";
import { FileUpload } from "../components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { uploadPdf } from "@/services/uploadPdf";

const LANGUAGES = [
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  // ...ajoute d'autres langues si besoin
];


const TranslatePage = () => {
  const [baseLang, setBaseLang] = useState<string>("ja");
  const [targetLang, setTargetLang] = useState<string>("en");
  const [chapter, setChapter] = useState<string>("");
  const [mangaTitle, setMangaTitle] = useState<string>("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (file?: File) => {
    setPdfFile(file || null);
    setError(null);
    if (file) {
      setLoadingPdf(true);
      setLoadingPdf(false);
    } else {
      setError("Please upload a valid PDF file.");
    }
    if (file && file.type !== "application/pdf") {
      setError("Only PDF files are accepted.");
      setPdfFile(null);
      return;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoute ici la logique d'envoi (Supabase, etc.)
    // ...
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-12 px-4 mt-20">
        <h1 className="text-3xl font-bold mb-4">Start a New Translation Project</h1>
        <div className="mb-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            <li>All fields are required to start a translation.</li>
            <li>Upload your own PDF file containing the manga/webtoon chapter to translate.</li>
            <li>Choose the correct source and target language.</li>
            <li>Only PDF files are accepted.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Colonne 1 */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="manga-title">Manga/Webtoon Title</Label>
                <Input
                  id="manga-title"
                  type="text"
                  placeholder="Enter the title of your manga/webtoon"
                  value={mangaTitle}
                  onChange={e => setMangaTitle(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
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
              <Label>Upload PDF Chapter</Label>
              <div className="mt-2">
                <FileUpload
                  onChange={files => handleFileChange(files[0])}
                />
              </div>
              <div className="text-sm text-gray-700 min-h-[24px] flex items-center justify-center">
                {loadingPdf && (
                  <span className="flex items-center gap-2 text-purple-600">
                    <Loader2 className="animate-spin w-4 h-4" /> Loading PDF...
                  </span>
                )}
                {!loadingPdf && !pdfFile && error && (
                  <span className="text-red-600">{error}</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white text-xl px-10 py-6 rounded-xl font-bold shadow-md hover:scale-105 transition-transform"
              onClick={() => {
                
              }}
              >
              Start Translation Project
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default TranslatePage;
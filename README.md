
# 🈺 TRADOKU— PDFtraduction Web App

Une plateforme communautaire de traduction de mangas et webtoons, à partir de fichiers PDF. Chaque page est annotée, les bulles sont traduites manuellement (aides IA optionnelles) et validées une par une.

## 🚀 Stack Technique

| Composant        | Technologie utilisée                     |
|------------------|-------------------------------------------|
| Frontend         | React + Vite                             |
| Styling          | TailwindCSS                              |
| PDF Upload       | react-dropzone                           |
| PDF Rendering    | pdfjs-dist / react-pdf                   |
| Bubble Detection | Manuel (rectangle drag)                  |
| OCR              | Tesseract.js                             |
| IA Traduction    | Traduction avec IA Hugging Face.         |
| Auth & DB        | Supabase (Auth + Postgres + Storage)     |
| Icônes           | [animated-fluent-emoji](https://animated-fluent-emoji.vercel.app/)     |
| lib ui.          | 21st.dev                                  |

## 🔧 Fonctionnement

1. **Choix d'une série** (Existant ou pas)
2. **Upload d’un chapitre** (PDF)
3. **Rendu de chaque page**
4. **Annotation des bulles de texte** (rectangle + OCR)
5. **Traduction IA pré-remplie**
6. **Validation manuelle de chaque bulle et correction si nécessaire**
7. **Publication du chapitre**
8. **Stockage & historique de chaque chapitre dans Supabase**

## ✨ Roadmap
- [ ] Début de l'interface et des pages nécessaires
- [ ] Upload + rendu PDF
- [ ] Détection manuelle de bulles
- [ ] Extraction de texte (OCR)
- [ ] Intégration IA traduction
- [ ] Système de validation bulle par bulle
- [ ] Mode lecture comparatif
- [ ] Gestion de projets communautaires
- [ ] Version publique

## 🧑‍💻 Dev setup

```bash
# Install
npm install

# Dev server
npm run dev

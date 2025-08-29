import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import initMangaEasterEggs from './utils/mangaEasterEggs.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialiser les easter eggs manga après le rendu
setTimeout(() => {
  initMangaEasterEggs();
}, 1000);

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import './utils/pdfWorker'

createRoot(document.getElementById("root")!).render(<App />);

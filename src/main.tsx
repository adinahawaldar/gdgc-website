import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Optional: Global dark mode detection
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  document.documentElement.classList.add("dark");
}

// Optional: Animate root fade-in for smoother UX
const rootElement = document.getElementById("root")!;
rootElement.classList.add("opacity-0", "animate-fade-in-up");
setTimeout(() => rootElement.classList.remove("opacity-0"), 50);

createRoot(rootElement).render(<App />);

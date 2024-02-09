import "./globals.css";
import HomePage from "./pages/HomePage";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = HomePage.render();

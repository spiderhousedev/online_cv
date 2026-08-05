import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import App from "./App.jsx";
import "./index.css";

async function initialiseParticles(engine) {
  await loadSlim(engine);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParticlesProvider init={initialiseParticles}>
      <App />
    </ParticlesProvider>
  </StrictMode>,
);
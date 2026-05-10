/**
 * @fileoverview Main entry point for the podcast application. Initializes the app by rendering the podcast grid and setting up event listeners.
 * Manages the initialization and event binding for the application, adhering to the Single Responsibility Principle (SRP) by only handling startup logic.
 */
import { podcasts } from "./data.js";
import { createModal } from "./components/createModal.js";
import { createGrid } from "./views/createGrid.js";

/**
 * Initializes the podcast application.
 *
 * @function init
 * @description Binds the close modal event and renders the initial podcast grid.

 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 * @returns
 */
function init() {
  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);
  const grid = createGrid();
  grid.render(podcasts);
}

init();
import { createPodcastCard } from "../components/createPodcastCard.js";
import { createModal } from "../components/createModal.js";

/**
 * Grid Render - responsible for rendering the grid of podcast cards.
 * 
 * @principle SRP - Manages layout and rendering rendering only; delegates card creation to createPodcastCard and modal creation to createModal.
 */
export const createdGrid = () => {
    const container = document.getElementById('podcastGrid');

    return {
        /**
         * Renders a list of podcasts into the grid.
         * @param {object[]} podcastList - Array of podcast objects.
         */
        render(podcastList) {
            container.innerHTML = ""; // Clear existing content
            podcastList.forEach((p) => {
                const card = createPodcastCard(p, createModal.open);
                container.appendChild(card);
            });
        },
    };
};
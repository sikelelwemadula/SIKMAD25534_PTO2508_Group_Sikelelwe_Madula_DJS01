import { genres } from "../data.js";

/**
 * Maps genre IDs to their corresponding names and formats them as HTML tags.
 * Retrieves the names of genres based on their IDs.
 * @param {number[]} genreIds - An array of genre IDs.
 * @returns {string[]} An array of genre names.
 */

function getGenreNames(genreIds) {
  if (!Array.isArray(genreIds)) return [];
  return genreIds.map(id => {
    const genre = genres.find(g => g.id === id);
    return genre ? genre.title : `Genre ${id}`;
  });
}

/**
 * Factory function that creates a podcast card component.
 * 
 * @param {Object} data - The podcast information object.
 * @param {string|number} data.id - Unique identifier for the podcast.
 * @param {string} data.title - Name of the podcast.
 * @param {string} data.image - URL for the cover art image.
 * @param {number} data.seasons - The total count of seasons available.
 * @param {number[]} data.genres - Array of genre IDs associated with the podcast.
 * @param {string} data.updated - ISO date string of the last update.
 * @param {Function} [onCardClick] - Optional callback function that receives the podcast data on click.
 * @returns {HTMLElement} A configured <article> element ready for the DOM.
 */

function createPodcastCard(data, onCardClick) {
  const date = new Date(data.updated).toLocaleDateString();
  const genreNames = getGenreNames(data.genres);
  const card = document.createElement("article");

  card.className = "podcast-card";
  card.dataset.id = data.id;
  card.innerHTML = `
    <img src="${data.image}" alt="${data.title}" class="podcast-image" loading="lazy">
    <div class="podcast-info">
      <h3>${data.title}</h3>
      <p><strong>${data.seasons} season${data.seasons === 1 ? "" : "s"}</strong></p>
      <div class="genre-tags">${genreNames.map(name => `<span class="genre-tag">${name}</span>`).join('')}</div>
      <p>Updated: ${date}</p>
    </div>
  `;

  if (typeof onCardClick === "function") {
    card.addEventListener("click", () => onCardClick(data));
  }

  return card;
}

export { createPodcastCard };
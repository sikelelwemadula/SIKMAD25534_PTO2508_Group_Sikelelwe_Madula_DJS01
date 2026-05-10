/**
 * @fileoverview Modal component for displaying detailed podcast and season information.
 */


import { genres, seasons } from "../data.js";

// DOM elements for modal content
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDesc');
const modalGenres = document.getElementById('modalGenres');
const modalUpdated = document.getElementById('modalUpdated');
const seasonList = document.getElementById('seasonList');

/**
 * Converts genre IDs into a string of HTML span elements.
 * 
 * @param {number[]} genreIds - Array of genre IDs to look up.
 * @returns {string} A string of HTML representing genre tags.
 */

function formatGenres(genreIds) {
  if (!Array.isArray(genreIds) || genreIds.length === 0) {
    return '<span class="genre-tag">No genres</span>';
  }

  return genreIds
    .map((id) => {
      const genre = genres.find(g => g.id === id);
      const name = genre ? genre.title : `Genre ${id}`;
      return `<span class="genre-tag">${name}</span>`;
    })
    .join(' ');
}

/**
 * Populates the modal with podcast details and removes the 'hidden' class to display it.
 * 
 * @param {Object} podcast - The podcast data object.
 * @param {string} podcast.id - The unique identifier (used to find matching seasons).
 * @param {string} podcast.title - The title of the podcast.
 * @param {string} podcast.image - URL for the podcast artwork.
 * @param {string} podcast.description - The podcast's description.
 * @param {number[]} podcast.genres - Array of genre IDs.
 * @param {string} podcast.updated - ISO date string of the last update.
 */

function open(podcast) {
  if (!modal) return;

  modalTitle.textContent = podcast.title || '';
  modalImage.src = podcast.image || '';
  modalImage.alt = podcast.title || 'Podcast image';
  modalDesc.textContent = podcast.description || '';
  modalGenres.innerHTML = formatGenres(podcast.genres);
  modalUpdated.textContent = `Updated: ${new Date(podcast.updated).toLocaleDateString()}`;
  const podcastSeasons = seasons.find(s => s.id === podcast.id)?.seasonDetails || [];
  seasonList.innerHTML = podcastSeasons.map(season => `
    <li class="season-card">
      <h4>${season.title}</h4>
      <p>${season.episodes} episodes</p>
    </li>
  `).join('');

  modal.classList.remove('hidden');
}

/**
 * Closes the modal by adding the 'hidden' class.
 */

function close() {
  if (!modal) return;
  modal.classList.add('hidden');
}

/**
 * Public API for controlling the podcast modal.
 * @namespace
 */

export const createModal = {
  open,
  close,
};
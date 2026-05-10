import { genres, seasons } from "../data.js";

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDesc');
const modalGenres = document.getElementById('modalGenres');
const modalUpdated = document.getElementById('modalUpdated');
const seasonList = document.getElementById('seasonList');

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

function close() {
  if (!modal) return;
  modal.classList.add('hidden');
}

export const createModal = {
  open,
  close,
};
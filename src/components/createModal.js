const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDesc');
const modalGenres = document.getElementById('modalGenres');
const modalUpdated = document.getElementById('modalUpdated');
const seasonList = document.getElementById('seasonList');

function formatGenres(genreIds) {
  if (!Array.isArray(genreIds) || genreIds.length === 0) {
    return '<span class="tag">No genres</span>';
  }

  return genreIds
    .map((id) => `<span class="tag">Genre ${id}</span>`)
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
  seasonList.innerHTML = `<li>${podcast.seasons} season${podcast.seasons === 1 ? '' : 's'}</li>`;

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
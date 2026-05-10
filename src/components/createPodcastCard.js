import { genres } from "../data.js";

function getGenreNames(genreIds) {
  if (!Array.isArray(genreIds)) return [];
  return genreIds.map(id => {
    const genre = genres.find(g => g.id === id);
    return genre ? genre.title : `Genre ${id}`;
  });
}

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
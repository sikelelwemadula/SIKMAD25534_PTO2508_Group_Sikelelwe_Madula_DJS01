function createPodcastCard(data, onCardClick) {
  const date = new Date(data.updated).toLocaleDateString();
  const card = document.createElement("article");

  card.className = "podcast-card";
  card.dataset.id = data.id;
  card.innerHTML = `
    <img src="${data.image}" alt="${data.title}" class="podcast-image">
    <div class="podcast-info">
      <h3>${data.title}</h3>
      <p><strong>${data.seasons} season${data.seasons === 1 ? "" : "s"}</strong></p>
      <p>Updated: ${date}</p>
    </div>
  `;

  if (typeof onCardClick === "function") {
    card.addEventListener("click", () => onCardClick(data));
  }

  return card;
}

export { createPodcastCard };
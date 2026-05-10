function renderSeasons() {
  const container = document.getElementById('seasons-list');
  container.innerHTML = seasonsData.map(s => `
    <div class="season-row">
      <div class="season-info">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
      <div class="episode-count">${s.episodes} episodes</div>
    </div>
  `).join('');
}
/**
 * Renders the season list by generating HTML cards and injecting them into the DOM.
 * 
 * @function renderSeasons
 * @description Maps over season data to create a list of season-info rows.
 * @requires seasonsData - Expects a global or imported array of season objects.
 * @returns {void}
 */

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
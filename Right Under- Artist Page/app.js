// Get the album and track lists
const albumList = document.getElementById('album-list');
const trackList = document.getElementById('track-list');

// Add album list items
albumList.innerHTML = `
  <li><a href="#">Album 1</a></li>
  <li><a href="#">Album 2</a></li>
  <li><a href="#">Album 3</a></li>
`;

// Add track list items
trackList.innerHTML = `
  <li><a href="#">Track 1</a></li>
  <li><a href="#">Track 2</a></li>
  <li><a href="#">Track 3</a></li>
`;

// Add event listeners for album and track clicks
albumList.addEventListener('click', (e) => {
  // Handle album click
  console.log('Album clicked:', e.target.textContent);
});

trackList.addEventListener('click', (e) => {
  // Handle track click
  console.log('Track clicked:', e.target.textContent);
});
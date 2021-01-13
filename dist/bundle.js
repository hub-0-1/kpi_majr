/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./graphiques.js ***!
  \***********************/
window.onload = async function () {
  let donnees = await importer();
  console.log(donnees);
}

async function importer () {
  let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1yTITCMmTejSxkloLJP1auk6pAcA1vtpQ8V6IZkqpFxg/values/'Phase 1'!A:L?key=AIzaSyCDbtmNllO1DY1lkrmBTjCHx_0g5Mm_gTw");
  if(!response.ok) throw "Impossible d'accéder aux données";
  return response.json();
} 

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcGlfbWFqci8uL2dyYXBoaXF1ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBsZXQgZG9ubmVlcyA9IGF3YWl0IGltcG9ydGVyKCk7XG4gIGNvbnNvbGUubG9nKGRvbm5lZXMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRlciAoKSB7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLzF5VElUQ01tVGVqU3hrbG9MSlAxYXVrNnBBY0ExdnRwUThWNklaa3FwRnhnL3ZhbHVlcy8nUGhhc2UgMSchQTpMP2tleT1BSXphU3lDRGJ0bU5sbE8xRFkxbGtybUJUakNIeF8wZzVNbV9nVHdcIik7XG4gIGlmKCFyZXNwb25zZS5vaykgdGhyb3cgXCJJbXBvc3NpYmxlIGQnYWNjw6lkZXIgYXV4IGRvbm7DqWVzXCI7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59IFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
import Chart from 'chart.js';
var _ = require('lodash');

window.onload = async function () {
  let donnees = await importer();
  let entetes = donnees.slice(0, 1);
  let valeurs = donnees.slice(1);

  let avancement_objectifs = _.groupBy(_.flatten(valeurs.map(x => x.slice(3))));
  console.log(avancement_objectifs);
}

async function importer () {
  let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1yTITCMmTejSxkloLJP1auk6pAcA1vtpQ8V6IZkqpFxg/values/'Phase 1'!A:L?key=AIzaSyCDbtmNllO1DY1lkrmBTjCHx_0g5Mm_gTw");
  if(!response.ok) throw "Impossible d'accéder aux données";
  return (await response.json()).values;
} 

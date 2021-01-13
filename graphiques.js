import Chart from 'chart.js';
var _ = require('lodash');

window.onload = async function () {
  let donnees = await importer();
  console.log(donnees);
  donnees = _.groupBy(_.flatten(donnees.values), function (x) { return x; })
  console.log(donnees);
}

async function importer () {
  let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1yTITCMmTejSxkloLJP1auk6pAcA1vtpQ8V6IZkqpFxg/values/'Phase 1'!A:L?key=AIzaSyCDbtmNllO1DY1lkrmBTjCHx_0g5Mm_gTw");
  if(!response.ok) throw "Impossible d'accéder aux données";
  return response.json();
} 

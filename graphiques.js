import Chart from 'chart.js';
var _ = require('lodash');

window.onload = async function () {
  let donnees = await importer();
  let entetes = donnees.slice(0, 1);
  let valeurs = donnees.slice(1);

  let avancement_objectifs = _.groupBy(_.flatten(valeurs.map(x => x.slice(3))));

  let canvas = document.createElement('canvas');
  var myDoughnutChart = new Chart(canvas.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(avancement_objectifs),
      datasets: [{
        label: '# of Votes',
        data: _.map(avancement_objectifs, (value, key) => { return value.length }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
      }]
    }
  });

  document.body.appendChild(canvas);
}

async function importer () {
  let response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1yTITCMmTejSxkloLJP1auk6pAcA1vtpQ8V6IZkqpFxg/values/'Phase 1'!A:L?key=AIzaSyCDbtmNllO1DY1lkrmBTjCHx_0g5Mm_gTw");
  if(!response.ok) throw "Impossible d'accéder aux données";
  return (await response.json()).values;
} 

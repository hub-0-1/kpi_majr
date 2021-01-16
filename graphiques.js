import Chart from 'chart.js';
var _ = require('lodash');

import './timeline.sass';

window.onload = async function () {
  let donnees = await importer();

  afficher_pourcentages(donnees.phase1);
  afficher_timeline(donnees.priorisation);
}

function afficher_timeline (donnees) {
  let el_timeline = document.getElementById("timeline-elements");
  let el_descriptions = document.getElementById("timeline-descriptions-wrapper");

  _.each(donnees.slice(1), (organisme) => {
    console.log(organisme);
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "timeline-dot";
    input.setAttribute("data-description", organisme[3]);
    console.log(input);

    let div = document.createElement("div");
    div.className = "dot-info";
    div.setAttribute("data-description", organisme[3]);
    div.innetHTML = `
      <span class="year">${organisme[3]}</span>
      <span class="label">${organisme[1]}</span>
    `;

    let p = document.createElement("p");
    p.setAttribute("data-description", organisme[3]);
    p.innerHTML = organisme[0];

    el_timeline.parentNode.insertBefore(input, el_timeline);
    el_timeline.parentNode.insertBefore(div, el_timeline);
    //el_timeline.appendChild(div);
    el_descriptions.appendChild(p);
  });
}

function afficher_pourcentages (donnees) {
  //let entetes = donnees.slice(0, 1);
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
  let phase1 = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1yTITCMmTejSxkloLJP1auk6pAcA1vtpQ8V6IZkqpFxg/values/'Phase 1'!A:L?key=AIzaSyCDbtmNllO1DY1lkrmBTjCHx_0g5Mm_gTw");
  if(!phase1.ok) throw "Impossible d'accéder aux données";

  let priorisation = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1yTITCMmTejSxkloLJP1auk6pAcA1vtpQ8V6IZkqpFxg/values/'Priorisation'!A:D?key=AIzaSyCDbtmNllO1DY1lkrmBTjCHx_0g5Mm_gTw");
  if(!priorisation.ok) throw "Impossible d'accéder aux données";

  return {
    phase1: (await phase1.json()).values,
    priorisation: (await priorisation.json()).values,
  };
} 

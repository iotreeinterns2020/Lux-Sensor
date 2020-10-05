import React from "react";
import { Bar } from "react-chartjs-2";
import fire from "./config";

function BarChart() {
  var Cel = fire.database().ref().child("node1/Temperature/ºC");
  var fah = fire.database().ref().child("node1/Temperature/F");
  var Celdeg;var fahdeg;
  

    Cel.on('value', function (datasnapshot) {
      Celdeg = Cel.innerText = datasnapshot.val();
    })
    fah.on('value', function (datasnapshot) {
        fahdeg = fah.innerText = datasnapshot.val();
      })

  const data = {
    labels: ["°C","F"],
    datasets: [
      {
        label: "Temperature",
        backgroundColor: 'rgb(0,10,100)',
       
        data: [Celdeg ,fahdeg],
      },
    ],
  };
  return <Bar data={data} />;
}

export default BarChart;

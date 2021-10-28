import React from 'react';
import { Line } from 'react-chartjs-2';
const axios = require('axios');

let db_data = [];

const getTimes = async () => {
  try {
      const resp = await axios.get('https://2nnpsk9po1.execute-api.us-east-1.amazonaws.com/dev/times/');
      
      function getTime(type) {
        let time = resp.data.filter(function (el) {
          return el.type === type;
        }).map(a => a.time);
        return time;
      };

      let inn = getTime('in');
      let out = getTime('out');

      for (let i = 0; i < inn.length; i=i+1) {
        let seconds_out = out[i].split(':');
        let seconds_inn = inn[i].split(':');
        let result_out = parseInt(seconds_out[2])+parseInt(seconds_out[1]*60)+parseInt(seconds_out[0]*60*60);
        let result_inn = parseInt(seconds_inn[2])+parseInt(seconds_inn[1]*60)+parseInt(seconds_inn[0]*60*60);
        let result = result_inn-result_out;
        db_data.push(result);
      }
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

getTimes();

console.log(db_data);

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# smoking time',
      data: db_data,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
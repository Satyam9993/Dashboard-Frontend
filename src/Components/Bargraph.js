import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Bargraph = ({labels, dataset, color, title}) => {
    const options = {
        indexAxis: 'x',
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: title,
          },
        },
      };
      const data = {
        labels,
        datasets: [
          {
            label: 'No. of Data',
            data: dataset,
            backgroundColor: color,
          }
        ],
      };
  return (
    <>
        <Bar options={options} data={data} />
    </>
  )
}

export default Bargraph
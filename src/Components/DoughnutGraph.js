import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = ({ labels, dataset }) => {
    function generateRandomColors(n) {
        const colors = [];
        for (let i = 0; i < n; i++) {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          const a = Math.random().toFixed(2);
          colors.push(`rgba(${r}, ${g}, ${b}, ${a})`);
        }
        return colors;
    }
    const colors = generateRandomColors(labels.length);
      
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Data Cording country Country',
                data: dataset,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            }
        },
    };
    return (
        <div className='text-gray-100 bg-gray-900'>
            <Doughnut data={data} options={options}/>
        </div>
    )
}

export default DoughnutGraph;
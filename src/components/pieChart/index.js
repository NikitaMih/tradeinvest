import React from 'react';
import ReactDOM from 'react-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({Data}) => {

    const data = {
        labels: ['Cryptocurrency', 'Securities', 'Currency'],
        datasets: [
          {
            label: '# of Votes',
            data: Data,
            backgroundColor: [
              'rgba(112, 122, 142, 0.9)',
              'rgba(210, 142, 32, 0.9)',
              'rgba(20, 21, 27, 0.9)',
            ],
            borderColor: [
              'rgba(90, 98, 115, 1)',
              'rgba(161, 108, 24, 1)',
              'rgba(20, 21, 27, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <Pie 
            data={data} 
        />
    );
};

export default PieChart;

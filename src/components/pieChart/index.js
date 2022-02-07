import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, getUserData } from '../../slices/portfolioSlice';
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
              'rgba(194, 74, 41, 0.9)',
              'rgba(166, 171, 34, 0.9)',
              'rgba(42, 163, 56, 0.9)',
            ],
            borderColor: [
              'rgba(138, 60, 39, 1)',
              'rgba(129, 133, 34, 1)',
              'rgba(38, 99, 45, 1)',
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
}

export default PieChart;

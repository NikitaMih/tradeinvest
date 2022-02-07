import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({name,rate}) {
    
    const [value, SetValue] = useState([]);
    const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart',
          },
        },
      };

    useEffect(() => {
        createDataChart()
    },[])

    useEffect(() => {
        changeDataChart()
    },[rate])

    const createDataChart = () => {
        for(let i = 0; i <= 19; i++) {
            let newRate = (rate * (Math.random() * (1.03 - 0.97) + 0.97)).toFixed(3);
            SetValue(value.push(newRate))
        }
        value.push(rate);
    }

    const changeDataChart = () => {
        let newData = value.slice(1)
        newData.push(rate)
        SetValue(newData)
    }

    const data = {
        labels,
        datasets: [
          {
            label: name,
            data: value,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


    return (
        <Line 
            options={options} 
            data={data} 
        />
    );
}

export default LineChart;
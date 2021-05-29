import React from 'react';
import { Bar } from 'react-chartjs-2';
import Title from '../Title';

function BarChart() {
    
    const data = {
        labels: [
            'Georgia',
            'Wittie',
            'Morissa',
            'Hilario',
            'Murial',
            'Mela',
            'Myrta',
            'Bernelle'
        ],
        datasets: [
            {
                label: 'Potential',
                data: [94, 93, 92, 92, 93, 91, 91, 90],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBorderColor: ['rgba(54, 162, 235, 0.2)']
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Performance Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        // beginAtZero: true,
                        min: 0,
                        max: 8,
                        stepSize: 1
                    },
                },
            ],
        },
    };

    return (
        <React.Fragment>
            <Title>Players Performance</Title>
            <Bar data={data} options={options} />
        </React.Fragment>
    )
}

export default BarChart

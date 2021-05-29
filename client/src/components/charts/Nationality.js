import React from 'react';
import { Line } from 'react-chartjs-2';
import Title from '../Title';

function Nationality() {

    const data = {
        labels: [
            'Spain',
            'China',
            'Greece',
            'Luxembourg',
            'Uganda',
            'Cuba',
            'Poland',
            'Russia'
        ],
        datasets: [
            {
                label: 'FIFA Players',
                data: [15, 17, 3, 8, 18, 14, 5, 12],
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
            text: 'Nationality Chart'
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
            <Title>Players Nationality</Title>
            <Line data={data} options={options} />
        </React.Fragment>
    )
}

export default Nationality

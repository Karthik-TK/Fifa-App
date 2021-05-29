import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Title from '../Title';

function HitsChart() {

    const [graph, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/fifa/')
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const data = {
        labels: graph.map(i => i.name),
        datasets: [
            {
                label: 'Hits',
                data: graph.map(i => i.hits),
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
            text: 'Hits Chart'
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
            <Title>Players Hits</Title>
            <Bar data={data} options={options} />
        </React.Fragment>
    )
}

export default HitsChart

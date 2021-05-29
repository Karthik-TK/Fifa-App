import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Title from '../Title';

function AgeChart() {

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
                label: 'Age',
                data: graph.map(i => i.age),
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
            <Title>Players Age</Title>
            <Line data={data} options={options} />
        </React.Fragment>
    )
}

export default AgeChart

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Title from '../Title';
import { Line } from 'react-chartjs-2';

// Generate Sales Data
function Chart() {

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
        labels: graph.map(i => i.age),
        datasets: [
            {
                label: 'Hits',
                data: graph.map(i => i.hits),
                borderColor: ['rgba(63, 81, 181, 0.2)'],
                backgroundColor: ['rgba(63, 81, 181, 0.2)'],
                pointBackgroundColor: ['rgba(63, 81, 181, 0.2)'],
                pointBorderColor: ['rgba(63, 81, 181, 0.2)']
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Age vs Hits'
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
            <Title><ShowChartIcon fontSize="large" /> Age vs Hits</Title>
            <Line data={data} options={options} />
        </React.Fragment>
    );
}

export default Chart;
import React from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';

// Generate Sales Data
function createData(age, hits) {
    return { age, hits };
}

const data = [
    createData(23, 110),
    createData(30, 276),
    createData(33, 299),
    createData(29, 186),
    createData(28, 100),
    createData(36, 284),
    createData(32, 255),
    createData(25, 118),
    createData(34, 127),
];

class Chart extends React.Component {

    state = {
        data: [],
    };

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get("http://localhost:8000/api/fifa/").then((res) => {
            this.setState({ data: res.data });
        })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Title>Age vs Hits</Title>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                    >
                        <XAxis dataKey="age" stroke="#757575"/>
                        <YAxis stroke="#757575">
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill:"#757575"}}
                            >
                                Hits
                            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="hits" stroke="#3f51b5" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}

export default Chart;
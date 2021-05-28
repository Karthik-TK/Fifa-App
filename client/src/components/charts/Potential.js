import React from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import TimelineIcon from '@material-ui/icons/Timeline';
import Title from '../Title';

// Generate Sales Data
function createData(age, potential) {
    return { age, potential };
}

const data = [
    createData(23, 95),
    createData(30, 90),
    createData(33, 93),
    createData(29, 91),
    createData(28, 90),
    createData(36, 92),
    createData(32, 94),
    createData(25, 95),
    createData(34, 91),
];

class Potential extends React.Component {

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
                <Title><TimelineIcon fontSize="large"/> Age vs Potential</Title>
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
                        <XAxis dataKey="age" stroke="#757575" />
                        <YAxis stroke="#757575">
                            <Label
                                angle={270}
                                position="left"
                                style={{ textAnchor: 'middle', fill: "#757575" }}
                            >
                                Potential
                            </Label>
                        </YAxis>
                        <Line type="monotone" dataKey="potential" stroke="#3f51b5" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </React.Fragment>
        );
    }
}

export default Potential;
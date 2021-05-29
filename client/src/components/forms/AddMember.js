import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
class AddMember extends Component {

    constructor(props) {
        super(props)

        this.state = {
            player_id: '',
            name: '',
            nationality: '',
            position: '',
            overall: '',
            age: '',
            hits: '',
            potential: '',
            team: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.nationality} ${this.state.age}`)
        event.preventDefault()
    }

    render() {
        const {
            player_id,
            name,
            nationality,
            position,
            overall,
            age,
            hits,
            potential,
            team } = this.state

        return (

            <main className="Member" style={{ margin: '45px 0px 10px 0px' }}>
                <div className="appMember" style={{ margin: '40px 0px 10px 0px' }} />
                <Container maxWidth="lg" className="container" style={{ margin: '50px 10px 10px 10px' }}>
                    <Typography variant="h4" component="div" gutterBottom>
                        Add New Players
                    </Typography>
                    <form className="root" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <div style={{ padding: '10px' }}>
                            <TextField id="player_id" label="Player ID" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="name" label="Name" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="nationality" label="Nationality" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="position" label="Position" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="overall" label="Overall" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="age" label="Age" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="hits" label="Hits" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="potential" label="Potential" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField id="team" label="Team" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </div>
                    </form>
                </Container>
            </main>
        )
    }
}

export default AddMember

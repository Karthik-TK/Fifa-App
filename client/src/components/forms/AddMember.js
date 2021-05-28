import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';


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
            <div className="AddMember" style={{ margin: '60px 10px 10px 10px' }}>
                <main className="Member" style={{ margin: '60px 10px 10px 10px' }}>
                    <div className="appMember" style={{ margin: '50px 10px 10px 10px' }} />
                    <Container maxWidth="lg" className="container" style={{ margin: '50px 10px 10px 10px' }}>
                        <form className="root" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <h1>Add New Players Information</h1>
                            <TextField id="player_id" label="Player ID" type="number" variant="outlined" /><br></br>
                            <TextField id="name" label="Name" variant="outlined" /><br></br>
                            <TextField id="nationality" label="Nationality" variant="outlined" /><br></br>
                            <TextField id="position" label="Position" variant="outlined" /><br></br>
                            <TextField id="overall" label="Overall" type="number" variant="outlined" /><br></br>
                            <TextField id="age" label="Age" type="number" variant="outlined" /><br></br>
                            <TextField id="hits" label="Hits" type="number" variant="outlined" /><br></br>
                            <TextField id="potential" label="Potential" type="number" variant="outlined" /><br></br>
                            <TextField id="team" label="Team" variant="outlined" /><br></br>

                            <Button type="submit">Submit</Button>
                        </form>
                    </Container>
                </main>
            </div>
        )
    }
}

export default AddMember

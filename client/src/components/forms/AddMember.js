import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
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

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/fifa/', this.state)
            .then(response => {
                console.log(response)
                toast.success('New Player Added Success!', { position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
            })
            .catch(error => {
                console.log(error)
                toast.error('Enter all Details', { position: toast.POSITION.TOP_CENTER, autoClose:false })
            })
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
                            <TextField name="player_id" value={player_id} onChange={this.changeHandler} id="player_id" label="Player ID" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="name" value={name} onChange={this.changeHandler} id="name" label="Name" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="nationality" value={nationality} onChange={this.changeHandler} id="nationality" label="Nationality" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="position" value={position} onChange={this.changeHandler} id="position" label="Position" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="overall" value={overall} onChange={this.changeHandler} id="overall" label="Overall" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="age" value={age} onChange={this.changeHandler} id="age" label="Age" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="hits" value={hits} onChange={this.changeHandler} id="hits" label="Hits" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="potential" value={potential} onChange={this.changeHandler} id="potential" label="Potential" type="number" variant="outlined" />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <TextField name="team" value={team} onChange={this.changeHandler} id="team" label="Team" variant="outlined" />
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

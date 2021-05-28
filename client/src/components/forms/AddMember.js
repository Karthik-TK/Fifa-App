import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
            team: 'react'
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
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, topic } = this.state

        return (
            <div className="AddMember" style={{margin: '60px 10px 10px 10px'}}>
                <main className="Member" style={{margin: '60px 10px 10px 10px'}}>
                    <div className="appMember" style={{margin: '50px 10px 10px 10px'}} />
                    <Container maxWidth="lg" className="container" style={{margin: '50px 10px 10px 10px'}}>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Username </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={this.handleUsernameChange}
                                />
                            </div>
                            <div>
                                <label>Comments</label>
                                <textarea
                                    value={comments}
                                    onChange={this.handleCommentsChange}
                                />
                            </div>
                            <div>
                                <label>Topic</label>
                                <select value={topic} onChange={this.handleTopicChange}>
                                    <option value="react">React</option>
                                    <option value="angular">Angular</option>
                                    <option value="vue">Vue</option>
                                </select>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </Container>
                </main>
            </div>
        )
    }
}

export default AddMember

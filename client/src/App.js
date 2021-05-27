import React from 'react';
import axios from 'axios';
import Header from './components/Header'

class App extends React.Component {

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
      <div className="App">
        <Header />
        {this.state.data.map((list) => (
          <div key={list.id}>
            <h1>{list.name}</h1>
            <h2>{list.nationality}</h2>
            <h3>{list.age}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
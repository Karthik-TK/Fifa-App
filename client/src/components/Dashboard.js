import React from 'react';

const data = { "id": 1, "player_id": 158023, "name": "Lionel Messi", "nationality": "Argentina", "position": "ST|CF|RW", "overall": 94, "age": 30, "hits": 158023, "potential": 94, "team": "FC Barcelona" };

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data };
  }

  render() {
    return (
      <div className="Dashboard">
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

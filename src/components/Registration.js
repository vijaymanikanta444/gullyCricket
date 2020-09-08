import React, { Component } from 'react';

export default class Registration extends Component {
  render() {
    return (
      <div className="center">
        <div className="inline">
          <h3>Team-1</h3>
          <input type="text" name="team1" placeholder="Enter Team1 Name" />
        </div>
        <div className="inline">
          <h3>Team-2</h3>
          <input type="text" name="team2" placeholder="Enter Team2 Name" />
        </div>
        <div className="inline">
          <h3>Each Team Players</h3>
          <input
            type="text"
            name="team2"
            placeholder="Enter number of players in a team"
          />
        </div>
        <div className="inline">
          <h3>overs(1-50)</h3>
          <input
            type="number"
            name="team1"
            placeholder="Enter Number of Overs"
            width="50px"
            min="1"
            max="50"
          />
        </div>
        {/* <h1>Registration</h1> */}
      </div>
    );
  }
}

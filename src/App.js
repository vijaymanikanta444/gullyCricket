import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    teams: ['team1', 'team2'],
    score: 0,
    wickets: 0,
    overs: 0,
    // overs: {
    //   1: [
    //     {
    //       id: 1,
    //       score: 4,
    //       type: 'Regular',
    //     },
    //     {
    //       id: 2,
    //       score: 2,
    //       type: 'Regular',
    //     },
    //     {
    //       id: 3,
    //       score: 4,
    //       type: 'Regular',
    //     },
    //     {
    //       id: 4,
    //       score: 6,
    //       type: 'Regular',
    //     },
    //     {
    //       id: 5,
    //       score: 0,
    //       type: 'wicket',
    //     },
    //     {
    //       id: 6,
    //       score: 1,
    //       type: 'wide',
    //     },
    //   ],
    // },
    balls: 0,
    value: 0,
  };

  // previous = (e) => {
  //   if (this.state.value === 7) {
  //     this.setState({
  //       wickets: this.state.wickets - 1,
  //     });
  //   } else {
  //     this.setState({
  //       score: this.state.score - this.state.value,
  //     });
  //   }
  //   this.setState({
  //     balls: this.state.balls > 0 ? this.state.balls - 1 : 5,
  //     overs: this.state.balls === 0 ? this.state.overs - 1 : this.state.overs,
  //   });
  // };

  scoreIncrement = (e) => {
    this.setState({
      score: this.state.score + Number(e.target.id),
      balls: this.state.balls < 5 ? this.state.balls + 1 : 0,
      overs: this.state.balls < 5 ? this.state.overs : this.state.overs + 1,
      value: e.target.id,
    });
  };

  Increment = (e) => {
    this.setState({
      score: this.state.score + 1,
      value: 1,
    });
  };

  wicketIncrement = (e) => {
    this.setState({
      wickets: this.state.wickets + 1,
      balls: this.state.balls + 1,
      value: e.target.id,
    });
  };
  render() {
    return (
      <div className="center">
        <h1 className="title">GULLY CRICKET</h1>
        <h1 className="teams">
          <span className="yellow">{this.state.teams[0]}</span> Vs{' '}
          <span className="blue">{this.state.teams[1]}</span>
        </h1>

        <h1 className="score">
          {this.state.score}/{this.state.wickets}
        </h1>
        <h1 className="overs">
          <span>{this.state.overs}</span>.<span>{this.state.balls}</span>
        </h1>
        <div className="balls">
          <span className="ball">1</span>
          <span className="ball">2</span>
          <span className="ball">3</span>
          <span className="ball">4</span>
        </div>
        <div>
          <button className="previous" onClick={this.previous}>
            PREVIOUS
          </button>
        </div>
        <div>
          <button className="point" onClick={this.scoreIncrement} id="0">
            0
          </button>
          <button className="point" onClick={this.scoreIncrement} id="1">
            1
          </button>
          <button className="point" onClick={this.scoreIncrement} id="2">
            2
          </button>
          <button className="point" onClick={this.scoreIncrement} id="3">
            3
          </button>
          <button className="point" onClick={this.scoreIncrement} id="4">
            4
          </button>
          <button className="point" onClick={this.scoreIncrement} id="5">
            5
          </button>
          <button className="point" onClick={this.scoreIncrement} id="6">
            6
          </button>
          <button className="point" onClick={this.wicketIncrement} id="7">
            W
          </button>
          <button className="point" onClick={this.Increment} id="8">
            wd
          </button>
          <button className="point" onClick={this.Increment} id="8">
            nb
          </button>
        </div>
        {/* <span>10</span>
        <span>/</span>
        <span>0</span> */}
      </div>
    );
  }
}

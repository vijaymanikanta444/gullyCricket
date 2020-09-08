// import React, { Component } from 'react';

// export default class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Homepage</h1>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
// import Scoreboard from './Scoreboard';
// import Registration from './Registration';

export default class HomePage extends Component {
  render() {
    return (
      <div className="bc1">
        <div className="btn1">
          <div>
            <a className="btn2" href="/registration">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </a>
          </div>
          <div>
            <a className="btn2" href="/scoreboard">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Scoreboard
            </a>
          </div>
          <div>
            <a className="btn2" href="/scoreboard">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Previous Matches
            </a>
          </div>
          <div>
            <a className="btn2" href="/scoreboard">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Scheduled Matches
            </a>
          </div>
          <div>
            <a className="btn2" href="/scoreboard">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Extra1
            </a>
          </div>
          <div>
            <a className="btn2" href="/scoreboard">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Extra2
            </a>
          </div>
          <div>
            <a className="btn2" href="/scoreboard">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Extra3
            </a>
          </div>
        </div>
      </div>
    );
  }
}

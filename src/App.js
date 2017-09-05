import React, { Component } from 'react';
// import addTeam1 from './addTeam1.js'
import './App.css';

function handleClick(e) {
  e.preventDefault();
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      peoples: [
        "Jim ", "Tracy ", "Ben ", "Ken ", "Steve"
      ],
      team1: [],
      team2: [],
    };
  }

  render() {

      const sortTeam1 = this.state.peoples.map(function(people, i) {
        var containPeople = [people];
        console.log(i)
        return (containPeople[i])
      });

      const sortTeam2 = this.state.peoples.map(function(people, i) {
        var containPeople2 = [people];
        console.log(i)
        return (containPeople2[i])
      });



    return (
      <div>
      <h1>Choose Your Teams</h1>
      {this.state.peoples}
      <h2>Team 1</h2><button className="team1btn" onClick={handleClick}>Add to Team 1</button>
      <h2>Team 2</h2><button className="team2btn" onClick={handleClick}>Add to Team 2</button>
      <p>Team 1: {sortTeam1}</p>
      <p>Team 2: {sortTeam2}</p>
      </div>
    );
  }
}

export default App;

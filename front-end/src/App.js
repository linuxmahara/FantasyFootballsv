import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('/api/matchups/1/272466')
      .then(response => response.json())
      .then((matchups) =>{
        console.log('matchups', matchups)
        this.setState({ matchups })
      });
    fetch('/api/teams/272466')
      .then(response => response.json())
      .then((teams) =>{
        console.log('teams', teams)
        this.setState({ teams })
      });
  }

  render() {
    console.log('state', this.state)
    return (
      <h1>
       YO
      </h1>
    );
  }

}


export default App;

import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const baseURL = 'http://localhost:3333';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    // get initial data from api upon component mounting
    Axios.get(baseURL + '/smurfs')
    .then(response => this.setState({smurfs : response.data }))
    .catch(err => console.log(err));
  }

  getSmurfs(data){
    // smurf form will call this with res.data upon successfully posting a new smurf
    this.setState({
      smurfs : data
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route path="/smurfForm" render={() => <SmurfForm getSmurfs={this.getSmurfs} />} />
      </div>
    );
  }
}

export default App;

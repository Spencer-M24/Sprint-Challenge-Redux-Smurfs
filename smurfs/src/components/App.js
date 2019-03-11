import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import {addANewSmurf, gettingSmurf} from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.gettingSmurf();
  }



  submitHandler = e => {
    e.preventDefault();
    this.props.addANewSmurf(this.state);
    this.setState({name: '', age: '', height: ''})
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </header>

        <div className="formDiv">
          <form onSubmit={this.submitHandler}>
            <input className="formValues" onChange={this.changeHandler} value={this.state.name} type="text" name="name" placeholder="username" ></input>
            <input className="formValues" onChange={this.changeHandler} value={this.state.age} type="number" name="age" placeholder="Age"></input>
            <input className="formValues" onChange={this.changeHandler} value={this.state.height} type="text" name="height" placeholder="Height" ></input>
            <button className="formValues" type="submit">Click To Add Smurf To</button>
          </form>
        </div>
        
        <div className="SmurfHome">
          {this.props.smurfs.map((eachSmurf, i) => {
            return (
            <div key={i}><h3>Smurf Name:</h3>
              <h1>{eachSmurf.name}</h1>
              <h4>Smurf Age: {eachSmurf.age} </h4>
              <h4>Smurf Height: {eachSmurf.height}</h4>
            </div>);
          })}

        </div>
      </div>
    );
  }
}



        
      


const mapStateToProps = state => {
  
  return {
    smurfs: state.smurfs,
    error: state.error, 
    loading: state.loading
  }
}
export default connect(mapStateToProps, {addANewSmurf, gettingSmurf})(App);
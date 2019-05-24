import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Users from "./Users";
import Navbar from "./Navbar";
 
 
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users : []
    }
    this.sendInvite = this.sendInvite.bind(this);
  }

componentDidMount() {
  axios.get("https://reqres.in/api/users").then((res)=>{
    this.setState({users: res.data.data})
  })
}

sendInvite(formData) {
  console.log(formData);
  this.setState({users: this.state.users.concat(formData)});
}
  render() {
    return (
      <div>
        <Navbar /><br />
        <Users users={this.state.users} sendInvite={this.sendInvite}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

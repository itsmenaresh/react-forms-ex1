import React, { Component, Fragment } from 'react';
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
       <Fragment>
        <Navbar /><br />
        <main role="main" className="container-fluid">
          <Users users={this.state.users} sendInvite={this.sendInvite}/>
        </main>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));

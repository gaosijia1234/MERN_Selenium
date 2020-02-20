import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      showUsername: false
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      showUsername: true
    });
  }

  render() {
    return (
      <div>
        <h3 id="CreateNewUserH3">Create New User</h3>
        <span id="userAddedId">{this.state.showUsername ? 'User created successfully!' : null}</span>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label id="usernameId">Username: </label>
            <input type="text"
              required
              id="usernameInputId"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input id="inputId" type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
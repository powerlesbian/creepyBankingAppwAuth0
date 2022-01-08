import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onChangePersonBalance = this.onChangePersonBalance.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user_name: "",
      user_email: "",
      user_password: "",
      user_balance: ""
    };
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      user_name: e.target.value,
    });
  }

  onChangePersonEmail(e) {
    this.setState({
      user_email: e.target.value,
    });
  }

  onChangePersonPassword(e) {
    this.setState({
      user_password: e.target.value,
    });
  }
  onChangePersonBalance(e) {
    this.setState({
      user_balance: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      user_name: this.state.user_name,
      user_email: this.state.user_email,
      user_password: this.state.user_password,
      user_balance: this.state.user_balance
    };

    axios
      .post("http://128.199.160.31:5050/record/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
        user_name: "",
        user_email: "",
        user_password: "",
        user_balance: ""
    });
    alert(`Congrats! On creating a new account with us. Our bank is very transparent, all customers can check account info in All Data.`);
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Account</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Your Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Your email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_email}
              onChange={this.onChangePersonEmail}
            />
          </div>
          <div className="form-group">
            <label>Your password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_password}
              onChange={this.onChangePersonPassword}
            />
          </div>
          <div className="form-group">
            <label>How much are you depositing to create your account? Your starting Balance: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.user_balance}
              onChange={this.onChangePersonBalance}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Bank with us!"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

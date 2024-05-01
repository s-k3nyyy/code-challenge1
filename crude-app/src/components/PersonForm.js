import React, { Component } from 'react';

class PersonForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    feeBalance: ''
  };

  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

 
  handleSubmit = (e) => {
    e.preventDefault(); 
    const { firstName, lastName, email, gender, feeBalance } = this.state;
   
    const newPerson = {
      id: Date.now(), 
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      fee_balance:(feeBalance) 
    };
    
    this.props.onCreate(newPerson);
   
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      feeBalance: ''
    });
  }

  render() {
    
    const { firstName, lastName, email, gender, feeBalance } = this.state;
    return (
      
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="gender"
          value={gender}
          placeholder="Gender"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="feeBalance"
          value={feeBalance}
          placeholder="Fee Balance"
          onChange={this.handleChange}
        />
        <button  className='add' type="submit">Add Person</button>
      </form>
    );
  }
}

export default PersonForm;

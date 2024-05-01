import React, { Component } from 'react';

class Item extends Component {
  
  handleUpdateClick = () => {
    const { person } = this.props;
    this.props.onUpdate(person.id);
  } 
  handleDeleteClick = () => {

    const { person } = this.props;
  
    this.props.onDelete(person.id);
  }

  render() {
    
    const { person } = this.props;
    
    return (
      <tr>
        <td>{person.first_name}</td>
        <td>{person.last_name}</td>
        <td>{person.email}</td>
        <td>{person.gender}</td>
        <td>{person.fee_balance}</td>
        <td>
          <button onClick={this.handleUpdateClick}>Update</button>
          <button onClick={this.handleDeleteClick}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;

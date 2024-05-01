import React, { Component } from 'react';
import './Styles.css'; 

class PersonItem extends Component {
  
  handleUpdateClick = () => {
    const { person, onUpdate } = this.props;
    
    onUpdate(person.id, { first_name: 'Updated Name' });
  };

 
  handleDeleteClick = () => {
    const { person, onDelete } = this.props;
    onDelete(person.id); 
  };

  render() {
    const { person } = this.props; 
    return (
    
      <li className="person-item">
        <div className="person-info">
          <span>{person.first_name}</span>
          <span>{person.last_name}</span>
          <span>{person.email}</span>
          <span>{person.gender}</span>
          <span>{person.fee_balance}</span>
          <div className="person-buttons">
      
            <button onClick={this.handleUpdateClick}>Update</button>
            
            <button onClick={this.handleDeleteClick}>Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default PersonItem;

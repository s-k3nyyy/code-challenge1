import React, { Component } from 'react';
import PersonItem from './PersonItem';
import './Styles.css'; 

class List extends Component {
  render() {
  
    const { data, onDelete, onUpdate } = this.props;
    return (
     
      <div className="list-container">
      
          {data.map(person => (
           
            <PersonItem key={person.id} person={person} onDelete={onDelete} onUpdate={onUpdate} />
          ))}
        
      </div>
    );
  }
}

export default List;

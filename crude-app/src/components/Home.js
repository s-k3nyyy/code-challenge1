import React, { Component } from 'react';
import { PeopleDataConsumer } from '../Contest'; 
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Crud App</h3>
        <PeopleDataConsumer>
          {(value) => (
            <Table striped bordered hover size="sm" variant="dark">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Fee Balance</th>
                </tr>

                {value.allData.map(person => {
                  return(
                    <tr>
                    <td>{person.first_name}</td>
                    <td>{person.last_name}</td>
                    <td>{person.email}</td>
                    <td>{person.gender}</td>
                    <td>{person.fee_balance}</td>
                  </tr>
                  )
                })}
              </tbody>
            </Table>
          )}
        </PeopleDataConsumer>
      </div>
    );
  }
}

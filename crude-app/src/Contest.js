import React, { Component } from 'react';
import { peopleData } from './appData'; 

const PeopleDataContext = React.createContext();

export default class Contest extends Component {
    state = {
        allData: peopleData
    }

    render() {
        console.log(this.state.allData);
        return (
            <div>
                <PeopleDataContext.Provider value={this.state.allData}>
                    {this.props.children}
                </PeopleDataContext.Provider>
            </div> 
        )
    }
}

export const PeopleDataConsumer = PeopleDataContext.Consumer;

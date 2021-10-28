import React, { Component } from 'react';
import './calendar.css';

export default class Calendar extends Component {
    state = {
        data: ''
    };
/*
    getData = (e) => {
        const data = e.target.value;
        this.setState({data});
    };
  */
    render() {
        return (
            <div> Select date: 
                <input 
                    className="calendar" 
                    type="date" 
                />
            </div>
        );
    };
};

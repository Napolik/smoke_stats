import React, { Component } from "react";
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#">Month</a></li>
                    <li><a href="#">Week</a></li>
                    <li><a href="#">Day</a></li>
                </ul>
            </div>
        )
    }
};
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserList from "../user-list";
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li><Link to="/">Month</Link></li>
                    <li><Link to="/">Week</Link></li>
                    <li><Link to="/">Day</Link></li>
                </ul>
                <div className="UserList">
                    <UserList/>
                </div>
            </div>
        )
    }
};
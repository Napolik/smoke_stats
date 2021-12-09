import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserList from "../user-list";
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="UserList">
                    <UserList/>
                </div>
            </div>
        )
    }
};
import React, { Component } from "react";
import './app.css';
import MyChart from '../chart/chart';
import Header from "../header";
import Sidebar from "../sidebar";
import Calendar from "../calendar";

export default class App extends Component {
    render() {

       return (
        <div className="App">
          <Header/>
          <div className="main">
            <div className="sidebar">
              <Sidebar/>
            </div>
            <div className="content">
              <Calendar/>
              <MyChart className="my-chart"/>
            </div>
          </div>
        </div>
       )
}
};


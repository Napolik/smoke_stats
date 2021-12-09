import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import MyChart from "../chart/chart";
import Header from "../header";
import Sidebar from "../sidebar";
import Calendar from "../calendar";
import Home from "../home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div className="content">
            <Router>
              <React.Fragment>
                <Sidebar />
              </React.Fragment>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/times/" element={<MyChart />} />
                <Route path="/times/:id" element={<MyChart />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

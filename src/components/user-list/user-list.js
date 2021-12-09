import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import './user-list.css';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_data: [],
    };
  }

  userList = () => {};

  GetUsers = async () => {
    try {
      const resp = await axios.get(
        "https://2nnpsk9po1.execute-api.us-east-1.amazonaws.com/dev/users/"
      );
      let uniqueArray = resp.data.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i);
      this.setState({ my_data: uniqueArray });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.GetUsers();
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <div className="">
          {this.state.my_data.map((item, index) => {
            return (
              <div className="user_item" key={item.id} >
                <Link to={"/times/" + item.id} >
                  {item.first_name} {item.last_name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

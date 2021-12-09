import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

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
      this.setState({ my_data: resp.data });
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
              <div key={item.id}>
                <Link to={"/times/" + item.id}>
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

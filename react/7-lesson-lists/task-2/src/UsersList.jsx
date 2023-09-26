import React, { Component } from 'react';
import User from './User';
class UsersList extends Component {
  state = {
    sorting: null,
  };
  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    let usersList;
    if (this.state.sorting) {
      usersList = this.props.users
        .sort((a, b) =>
          this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
        );
    } else {
      usersList = this.props.users;
    }

    return (
      <>
        <div>
          <button className="btn" onClick={this.toggleSorting}>
            {this.state.sorting || '-'}
          </button>
        </div>
        <ul className="users">
          {this.props.users.map((user) => (
            <User name={user.name} {...user} />
          ))}
        </ul>
      </>
    );
  }
}
export default UsersList;

import React from 'react';
import UserCard, { userData } from '../UserCard';
import './style.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData };
  }

  removeUser = (id) => {
    const userList = userData.filter((user) => id !== user.id);
    this.setState({ userData: userList });
    console.log(userList);
  };

  render() {
    const { userData } = this.state;
    const user = userData.map((user) => (
      <li key={user.id} className='userItem'>
        <UserCard
          name={user.name}
          gender={user.gender}
          id={user.id}
          removeUser={this.removeUser}
        />
      </li>
    ));
    return (
      <article className='userCard'>
        <ul className='userList'>{user}</ul>
      </article>
    );
  }
}
export default UserList;

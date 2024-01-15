import React from 'react';

export const user1 = {
  id: 0,
  name: 'Tom',
  gender: 'male',
};

export const user2 = {
  id: 1,
  name: 'Alex',
  gender: 'male',
};

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <article>
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.gender}</li>
        </ul>
      </article>
    );
  }
}

export default UserCard;

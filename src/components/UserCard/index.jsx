import React from 'react';

export const userData = [
  { name: 'Alex', gender: 'male', id: 0 },
  { name: 'Jenifer', gender: 'female', id: 1 },
  { name: 'Klaus', gender: 'male', id: 2 },
  { name: 'Max', gender: 'male', id: 3 },
];

class UserCard extends React.Component {
  render() {
    const { name, gender, id, removeUser } = this.props;

    return (
      <>
        <p>name:{name}</p>
        <p>gender:{gender}</p>
        <p>id:{id}</p>
        <button onClick={() => removeUser(id)}>Delete</button>
      </>
    );
  }
}

export default UserCard;

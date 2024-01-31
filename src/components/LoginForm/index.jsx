import React, { Component } from 'react';

const initialValues = {
  email: '',
  pass: '',
  isRemembered: false,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialValues,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, pass, isRemembered } = this.state;
    console.log(isRemembered);
    console.log(pass);
    console.log(email);

    this.setState({
      ...initialValues,
    });
  };

  handleChange = ({ target: { name, value, checked, type } }) => {
    const isCheckBox = type === 'checkbox';
    const newState = { [name]: isCheckBox ? checked : value };
    this.setState(newState);
  };

  render() {
    const { email, pass, isRemembered } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='email'
          placeholder='email'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='pass'
          value={pass}
          onChange={this.handleChange}
        />
        <input
          type='checkbox'
          name='isRemembered'
          id=''
          checked={isRemembered}
          onChange={this.handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

export default LoginForm;

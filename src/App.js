import React from 'react';
import './App.css';
import PhoneDashboard from './components/PhoneDashboard';
import UserList from './components/UserList';

function App(props) {
  return (
    <>
      <PhoneDashboard />
      <UserList />
    </>
  );
}

export default App;

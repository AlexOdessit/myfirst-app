import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//классовий компонент
// class Heading extends React.Component {
//   render() {
//     //возвращает  реакт элемент / компонент
//     return <h1>Some Heading</h1>;
//   }
// }

// функциональный компонет
// function HeadingFunction() {
//   // має повертати реакт елемент / компонент
//   return <h1>Some heading func</h1>;
// }
// function HeadMenu() {
//   // має повертати реакт елемент / компонент
//   return <ul>Menu</ul>;
// }

// const headerComponent = React.createElement(Heading);
// const headerComponent = <Heading />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

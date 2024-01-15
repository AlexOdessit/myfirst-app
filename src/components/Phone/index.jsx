import React from 'react';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    // стан існує тільки у класових компонентів
    this.state = {
      isOn: false,
      isPhoneShown: true,
      phones: [
        {
          id: 0,
          color: 'black',
          price: 1599,
        },
        {
          id: 0,
          color: 'light',
          price: 1099,
        },
        {
          id: 0,
          color: 'gold',
          price: 20000,
        },
      ],
    };

    // прикрутили this
    // this.handleToggleOn = this.handleToggleOn.bind(this);
  }

  // handleToggleOn() {
  //   // setState - метод який приймає об'єкт і зливає його з поточним станом
  //   // після чого реакт робить повторний рендер
  //   const stateChanges = {
  //     isOn: true,
  //   };
  //   this.setState(stateChanges);
  //   /*
  //     доробити телефону кнопку вимикання,
  //     при якій його стан має змінитися на off
  //   */
  // }

  // this береться автоматично
  // handleToggleOff = () => {
  //   this.setState({
  //     isOn: false,
  //   });
  // };

  handleToggle = () => {
    const { isOn } = this.state;
    this.setState({
      // isOn: !this.state.isOn
      isOn: !isOn,
    });
  };

  render() {
    const { color, price } = this.props;
    const { isOn } = this.state;

    // let phoneStatus;

    // if(phoneState === 'on') {
    //   phoneStatus = <PhoneOnText />;
    // } else {
    //   phoneStatus = <PhoneOffText/>;
    // }

    const phoneStatus = isOn ? <PhoneOnText /> : <PhoneOffText />;

    const containerClass = `phoneContainer ${isOn ? 'on' : 'off'}`;

    return (
      <div className={containerClass}>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        {phoneStatus} handleToggleOn(){' '}
        {
          // setState - метод який приймає об'єкт і зливає його з поточним станом
          // після чого реакт робить повторний рендер
          // const stateChanges = {
          //   isOn: true,
          // };
          // this.setState(stateChanges   const phoneStatus = isOn ? <PhoneOnText /> : <PhoneOffText />;);
          // /*
          // доробити телефону кнопку вимикання,
          // при якій його стан має змінитися на off
        }
        <button onClick={this.handleToggle}>
          Switch {isOn ? 'on' : 'off'}
        </button>
      </div>
    );
  }
}

/*
  умовний рендерінг полягає у відмальуванні певних компонентів / елементів / тексту
  за певної умови
*/
function PhoneOnText() {
  return <p>Phone is currently on</p>;
}

function PhoneOffText() {
  return <p>Phone is currently off</p>;
}

export default Phone;

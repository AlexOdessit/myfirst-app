import Header from './components/Header';
import MainContent from './components/MainContent';
// import Greeting from './components/Greetings';
import './App.css';
import TextElement from './components/TextElement';
import Phone from './components/Phone';
import UserCard, { user1, user2 } from './components/UserCard';

function App() {
  return (
    <>
      <Header />
      <MainContent />

      <TextElement text='Long lorem ipsum text' tooltip='this is title' />
      <TextElement text='Other text' tooltip='other title' />
      <Phone color='black' price={15999.99} />
      <UserCard user={user1} />
      <UserCard user={user2} />
    </>
  );
}

export default App;

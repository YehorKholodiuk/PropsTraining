import logo from './logo.svg';
import './App.css';
import ContactList from "./ContactList";

function App() {
  const names = [
    {name:'Victor',phone: 222- 303},
    {name:'Vera',phone: 222- 333},
    {name:'Alice',phone: 222- 393},
  ];

  return (
    <div>
    <ContactList contacts={names}/>


    </div>
  );
}

export default App;

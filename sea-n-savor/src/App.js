import React from 'react';
import Home from './ Components/Home';
import Menu from './ Components/Menu';
import NavBar from './ Components/NavBar';
import Cart from './ Components/Cart';
import Contacts from './ Components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home/>
        <Menu/>
        <Cart/>
        <Contacts/>
        
      </header>
    </div>
  );
}

export default App;

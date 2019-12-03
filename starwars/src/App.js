import React from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const App1 = styled.div`
  background-image: url(https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
  background-size: auto;
  `

const Header = styled.h1 `
  font-size: 5rem;

`



const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <App1 className ="App1">
      <div className = "Form">
        <form></form>
      </div>
     
       <Header className = "Header">React Wars</Header>
       <CharacterList />
      
    </App1>
  );
}

export default App;

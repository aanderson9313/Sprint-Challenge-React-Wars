import React from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const App1 = styled.div`
  background-image: url(/static/media/sw-bg.dff75a1f.jpg);
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

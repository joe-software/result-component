import React from 'react';
import ReactDOM from 'react-dom/client';
import Resultcontainer from './Resultcontainer';
import styled from "styled-components";
import './app.css';


function App() {
  return (
    <div className="App">
      
        <Container>
        <Resultcontainer />
        </Container>
      
      
    </div>
  );
}

export default App;

const Container = styled.div`
height: 100%;
width: 100%;
`

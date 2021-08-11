import logo from './logo.svg';
import './App.css';
import React from 'react'



function Welcome(props) {
  return(<div> <h1>Hello, {props.name}
      </h1>
      {props.children}
      </div>);
}

const Element =()=>{
  return( <Welcome name="Sara123" ><div>child dev</div></Welcome>)
  };

function App() {
  return (
    <div className="App">
     
    <Element />
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import React from 'react';
import './App.scss';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button onClick={()=>console.log('클릭됐다!')}>Button</Button>
        <Button size="large">Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray">Button</Button>
        <Button size="large" color="gray">Button</Button>
        <Button size="small" color="gray">Button</Button>
      </div>
      <div className="buttons">
        <Button color="pink">Button</Button>
        <Button size="large" color="pink">Button</Button>
        <Button size="small" color="pink">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>BUTTON</Button>
        <Button color="gray" outline>BUTTON</Button>
        <Button size="small" color="pink" outline>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>Button</Button>
        <Button size="large" color="gray" fullWidth>Button</Button>
        <Button size="large" color="pink" fullWidth>Button</Button>
      </div>

    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello world from HSBC</h2>
//functional component, stateless component
const Image = (prop) => {
  let { src, title } = prop;
  src = src || 'https://www.w3schools.com/Html/pic_trulli.jpg';
  title = title || 'HSBC training Demo';
  return (
    <img src={src} alt={title} width="300" height="333" />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
        <div><Image src="https://www.w3schools.com/Html/pic_trulli.jpg"/>
        </div>
        <div><Image src="https://www.w3schools.com/Html/img_girl.jpg" title="Girl in a jacket" />
        </div>
        <div><Image src="https://www.w3schools.com/Html/img_chania.jpg" title="abc" />
        </div>
      </div>
    );
  }
}

export default App;

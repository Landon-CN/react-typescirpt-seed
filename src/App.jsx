import React from 'react';
import './App.less';
import logo from './logo.svg';
import {test } from './modules'
const Page = test();
class App extends React.Component{
  render() {
    const store = this.props.store;
    return (

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React by scliuyang11</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Page/>
        </div>
  
    );
  }
}

export default App;

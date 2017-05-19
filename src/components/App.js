import React, { Component } from 'react';
import './App.css';
import Footer from './common/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

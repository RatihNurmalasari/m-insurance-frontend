import React, { Component } from 'react';
import LoginBox from './components/LoginBox.js';
//import '../public/assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="login-container">
                <LoginBox/>
            </div>
    );
  }
}

export default App;

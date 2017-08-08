import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheckClaim from './CheckClaim';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="container">
      <Router>
      	<div>
	        <Route path="/" exact component={App}/>
	        <Route path="/checkclaim" exact component={CheckClaim}/>
	    </div>
      </Router>
    </div>
  )
}

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();

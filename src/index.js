import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Import the components
import App from './App';
import CheckClaim from './CheckClaim';
import ClaimDetails from './ClaimDetails';

const Nav = () => {
  return (
  	<div className="container">
      	<Router>
      		<div>
		        <Route path="/" exact component={App}/>
		        <Route path="/checkclaim" exact component={CheckClaim}/>
	            <Route path="/claimdetails" exact component={ClaimDetails}/>
	    	</div>
      	</Router>
    </div>
  )
}

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();

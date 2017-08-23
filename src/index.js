import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Import the components
import Login from './Login';
import CheckClaimPage from './CheckClaimPage';
import ClaimDetailsPage from './ClaimDetailsPage';

const Nav = () => {
  return (
  	<div className="container">
      	<Router>
      		<div>
		        <Route path="/" exact component={Login}/>
		        <Route path="/checkclaim" exact component={CheckClaimPage}/>
	            <Route path="/claimdetails" exact component={ClaimDetailsPage}/>
	    	</div>
      	</Router>
    </div>
  )
}

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();

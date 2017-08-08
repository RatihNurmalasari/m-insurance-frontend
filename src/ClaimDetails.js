import React, { Component } from 'react';
import ClaimDetailsForm from './components/ClaimDetailsForm.js';

class CheckClaim extends Component {
  render() {
    return (
        <div className="claim-detail-container">
            <div className="header">
                <img src="assets/images/Header - User logged in.png"></img>
            </div>
            <ClaimDetailsForm/>
            
        </div>
    );
  }
}

export default CheckClaim;

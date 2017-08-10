import React, { Component } from 'react';
import CheckClaimForm from './components/CheckClaimForm.js';

class CheckClaim extends Component {
  render() {
    return (
        <div className="claim-container">
            <div className="header">
                <img src="assets/images/Header - User logged in.png" alt="Header - User logged in"></img>
                <img src="assets/images/image_check_claim_status.png" alt="image_check_claim_status"></img>
            </div>
            <CheckClaimForm/>
            
        </div>
    );
  }
}

export default CheckClaim;

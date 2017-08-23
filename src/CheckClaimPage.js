import React, { Component } from 'react';
import CheckClaim from './components/CheckClaim.js';

/**
 * Class representing CheckClaim Page.
 * @extends Component
 */
class CheckClaimPage extends Component {
/**
 * Render is a function to return html tags to be rendered
 * @returns {html} Html tags to be rendered 
 */
  render() {
    return (
        <div className="claim-container">
            <div className="header">
                <img src="assets/images/Header - User logged in.png" alt="Header - User logged in"></img>
                <img src="assets/images/image_check_claim_status.png" alt="image_check_claim_status"></img>
            </div>
            <CheckClaim/>
            
        </div>
    );
  }
}

export default CheckClaimPage;

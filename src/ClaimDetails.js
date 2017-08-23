import React, { Component } from 'react';
import ClaimDetailsForm from './components/ClaimDetailsForm.js';

/**
 * Class representing Claim Detail Page
 * @extends Component
 */
class ClaimDetails extends Component {
/**
 * Render is a function to return html tags to be rendered
 * @returns {html} Html tags to be rendered 
 */
  render() {
    return (
        <div className="claim-detail-container">
            <div className="header">
                <img src="assets/images/Header - User logged in.png" alt="Header - User logged in"></img>
            </div>
            <ClaimDetailsForm/>
            
        </div>
    );
  }
}

export default ClaimDetails;

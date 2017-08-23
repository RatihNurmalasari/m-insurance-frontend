import React, { Component } from 'react';
import ClaimDetails from './components/ClaimDetails.js';

/**
 * Class representing Claim Detail Page
 * @extends Component
 */
class ClaimDetailsPage extends Component {
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
            <ClaimDetails/>
        </div>
    );
  }
}

export default ClaimDetailsPage;

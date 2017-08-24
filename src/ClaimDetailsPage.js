import React, { Component } from 'react';
import ClaimDetails from './components/ClaimDetails.js';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

/**
 * Class representing Claim Details Page
 * @extends Component
 */
class ClaimDetailsPage extends Component {
/**
 * Render is a function to return html tags to be rendered
 * @returns {HTML} HTML tags to be rendered 
 */
  render() {
    return (
        <div>
        <Header/>
        <div className="claim-detail-container">
            <ClaimDetails/>
        </div>
        <Footer/>
        </div>
    );
  }
}

export default ClaimDetailsPage;

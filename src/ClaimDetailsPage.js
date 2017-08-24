import React, { Component } from 'react';
import ClaimDetailsView from './components/view/ClaimDetailsView.js';
import HeaderView from './components/view/common/HeaderView.js';
import FooterView from './components/view/common/FooterView.js';

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
        <HeaderView/>
        <div className="claim-detail-container">
            <ClaimDetailsView/>
        </div>
        <FooterView/>
        </div>
    );
  }
}

export default ClaimDetailsPage;

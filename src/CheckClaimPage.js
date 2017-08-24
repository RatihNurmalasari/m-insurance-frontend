import React, { Component } from 'react';
import CheckClaimView from './components/view/CheckClaimView.js';
import HeaderView from './components/view/common/HeaderView.js';
import FooterView from './components/view/common/FooterView.js';

/**
 * Class representing Check Claim Page.
 * @extends Component
 */
class CheckClaimPage extends Component {
/**
 * Render is a function to return html tags to be rendered
 * @returns {HTML} HTML tags to be rendered 
 */
  render() {
    return (
        <div>
            <HeaderView/>
                <div className="claim-container">
                    <CheckClaimView/>
                </div>
            <FooterView/>
        </div>
    );
  }
}

export default CheckClaimPage;

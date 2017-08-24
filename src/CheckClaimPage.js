import React, { Component } from 'react';
import CheckClaim from './components/CheckClaim.js';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

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
            <Header/>
                <div className="claim-container">
                    <CheckClaim/>
                </div>
            <Footer/>
        </div>
    );
  }
}

export default CheckClaimPage;
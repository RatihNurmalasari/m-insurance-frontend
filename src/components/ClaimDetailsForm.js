import React, { Component } from 'react';

class ClaimDetailsForm extends Component {
    
    render() {
        return (
            <div className="check-claim-detail">
            <div className="claim-detail-text">
                    <p>Claim Details</p>
                    <a id="back-prev-page">&lt;&lt; Back to Previous Page</a>
            </div>
            <div id="member-info-container">
                <div className="member-info-header">
                    <p>Members Information</p>
                </div>
                <div className="member-info-body">
            
                </div>
            </div>
            <div id="claim-details-container">
                <div className="claim-details-header">
                    <p>Claim Details</p>
                </div>
                <div className="claim-details-body">
                    
                </div>
            </div>
            <div id="charge-details-container">
                <div className="charge-details-header">
                    <p>Charge Details</p>
                </div>
                <div className="charge-details-body">
                    
                </div>
            </div>
            </div>
            
        );
    }
}

export default ClaimDetailsForm;
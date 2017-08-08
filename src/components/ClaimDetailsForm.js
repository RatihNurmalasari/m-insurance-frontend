import React, { Component } from 'react';

class ClaimDetailsForm extends Component {
    handleSubmit(event){
        event.preventDefault();
        window.location.assign('/checkclaim');
    }
    
    render() {
        return (
            <div className="check-claim-detail">
            <div className="claim-detail-text">
                    <p>Claim Details</p>
                    <a id="back-prev-page" onClick={this.handleSubmit}>&lt;&lt; Back to Previous Page</a>
            </div>
            <div id="member-info-container">
                <div className="member-info-header">
                    Members Information
                </div>
                <div className="member-info-body">
                    <span className="left-claim-details">
                        <div id="patientName">
                            <label className="patient-name-label">Patient Name: </label>
                            <div className="patient-name-value">Lindsay Booth</div>
                        </div>
                        <div id="serviceDate">
                            <label className="service-date-label">Service Date: </label>
                            <div className="service-date-value">04/04/2017 - 04/04/2017</div>
                        </div>
                    </span>
                    <span className="right-claim-details">
                        <div id="claimNumber">
                            <label className="claim-number-label">Claim Number: </label>
                            <div className="claim-number-value">20179867189</div>
                        </div>
                        <div id="status">
                            <label className="status-label">Status: </label>
                            <div className="status-value">Processed</div>
                        </div>
                    </span>
                </div>
            </div>
            <div id="claim-details-container">
                <div className="claim-details-header">
                    Claim Details
                </div>
                <div className="claim-details-body">
                    <span className="left-claim-details">
                        <div id="patientName">
                            <label className="patient-name-label">Amount Billed: </label>
                            <div className="patient-name-value">$310</div>
                        </div>
                        <div id="serviceDate">
                            <label className="service-date-label">Amount Paid by Your Coverage: </label>
                            <div className="service-date-value">$0.00</div>
                        </div>
                    </span>
                    <span className="right-claim-details">
                        <div id="claimNumber">
                            <label className="claim-number-label">Amount Paid To: </label>
                            <div className="claim-number-value">Hospital</div>
                        </div>
                        <div >
                            <label > </label>
                            <div className="status-value"> </div>
                        </div>
                    </span>
                </div>
            </div>
            
            </div>
            
        );
    }
}

export default ClaimDetailsForm;
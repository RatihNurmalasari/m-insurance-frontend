import React, { Component } from 'react';
import $ from 'jquery';

class ClaimDetailsForm extends Component {
    constructor(props){
        super(props);
        this.mappingData=this.mappingData.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        var dataClaim = window.sessionStorage.getItem('dataClaim');
        var dataClaimObj = JSON.parse(dataClaim);
        this.mappingData(dataClaimObj);
    }
    
    mappingData(data){
        $(".patient-name-value").text(data.name);
        $(".claim-number-value").text(data.claimid);
        $(".service-date-value").text();
        $(".status-value").text(data.claimstatus);
        $(".patient-amount-billed-value").text();
        $(".service-amount-paid-coverage-value").text();
        $(".claim-amount-paid-coverage-to-value").text();
    }

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
            <div className="patient-name-value"></div>
            </div>
            <div id="serviceDate">
            <label className="service-date-label">Service Date: </label>
            <div className="service-date-value"></div>
            </div>
            </span>
            <span className="right-claim-details">
            <div id="claimNumber">
            <label className="claim-number-label">Claim Number: </label>
            <div className="claim-number-value"></div>
            </div>
            <div id="status">
            <label className="status-label">Status: </label>
            <div className="status-value"></div>
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
            <label className="patient-amount-billed-label">Amount Billed: </label>
            <div className="patient-amount-billed-value"></div>
            </div>
            <div id="serviceDate">
            <label className="service-amount-paid-coverage-label">Amount Paid by Your Coverage: </label>
            <div className="service-amount-paid-coverage-value"></div>
            </div>
            </span>
            <span className="right-claim-details">
            <div id="claimNumber">
            <label className="claim-amount-paid-coverage-to-label">Amount Paid To: </label>
            <div className="claim-amount-paid-coverage-to-value"></div>
            </div>
            
            
            </span>
            </div>
            </div>

            </div>

        );
    }
}

export default ClaimDetailsForm;
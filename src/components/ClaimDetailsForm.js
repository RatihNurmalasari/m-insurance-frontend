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
        var dataProfile = window.sessionStorage.getItem('dataProfile');
        var dataClaimObj = JSON.parse(dataClaim);
        var dataProfileObj = JSON.parse(dataProfile);
        this.mappingData(dataClaimObj,dataProfileObj);
    }
    
    mappingData(dataClaimObj,dataProfileObj){
        $(".patient-name-value").text(dataClaimObj.name);
        $(".claim-number-value").text(dataClaimObj.claimId);
        $(".service-date-value").text(dataClaimObj.fromDate + " - " + dataClaimObj.endDate);
        $(".status-value").text(dataClaimObj.status);
        $(".address-value").text(dataProfileObj.address);
        $(".city-value").text(dataProfileObj.city + ", " + dataProfileObj.state);
        $(".country-value").text(dataProfileObj.zipcode + ", " + dataProfileObj.country);
        $(".patient-amount-billed-value").text(dataClaimObj.amountBilled);
        $(".service-amount-paid-coverage-value").text(dataClaimObj.amountPaid);
        $(".claim-amount-paid-coverage-to-value").text(dataClaimObj.hospital.name);
        
        
        $(".claim-address-value").text(dataClaimObj.hospital.address);
        $(".claim-city-value").text(dataClaimObj.hospital.city + ", " + dataClaimObj.hospital.state);
        $(".claim-country-value").text(dataClaimObj.hospital.zipcode + ", " + dataClaimObj.hospital.country);
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
            <div id="address">
            <label className="address-label">Address: </label>
            <div className="address-value"></div><br></br>
            <div className="city-value"></div><br></br>
            <div className="country-value"></div>
            </div>
            </span>
            <span className="right-claim-details">
            <div id="claimNumber">
            <label className="claim-number-label">Claim Number: </label>
            <div className="claim-number-value"></div>
            </div>
            <div id="serviceDate">
            <label className="service-date-label">Service Date: </label>
            <div className="service-date-value"></div>
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
            <div id="patientAmountBilled">
            <label className="patient-amount-billed-label">Amount Billed: </label>
            <div className="patient-amount-billed-value"></div>
            </div>
            <div id="serviceAmountPaid">
            <label className="service-amount-paid-coverage-label">Amount Paid by Your Coverage: </label>
            <div className="service-amount-paid-coverage-value"></div>
            </div>
            </span>
            <span className="right-claim-details">
            <div id="claimAmountPaid">
            <label className="claim-amount-paid-coverage-to-label">Amount Paid To: </label>
            <div className="claim-amount-paid-coverage-to-value"></div>
            </div>
            
            <div id="claimAddress">
            <label className="claim-address-label">Address: </label>
            <div className="claim-address-value"></div><br></br>
            <div className="claim-city-value"></div><br></br>
            <div className="claim-country-value"></div>
            </div>
            
            </span>
            </div>
            </div>

            </div>

        );
    }
}

export default ClaimDetailsForm;
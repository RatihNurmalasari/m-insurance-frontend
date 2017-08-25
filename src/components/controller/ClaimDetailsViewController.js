import React, { Component } from 'react';
import MiniSignal from 'mini-signals';
import $ from 'jquery';
import * as Validator from '../../util/Validator.js';
import * as API from '../../util/API.js';

export const mappingDataSignal = new MiniSignal();
export const handleSubmitSignal = new MiniSignal();

/**
 * Class representing Check Claim Details View Controller.
 * @extends Component
 */
export class CheckClaimDetailsViewController extends Component {
    
    /**
     * Create a CheckClaimDetailsViewController.
     * 
     */
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
        this.mappingData = this.mappingData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    /**
    * Function that will be automatically called when component is ready
    * 
    */
    componentDidMount() {
        //add signal listener
        this.binding = mappingDataSignal.add(this.mappingData);
        this.binding = handleSubmitSignal.add(this.handleSubmit);
    }
    
    /**
    * Mapping data from response
    * @param {object} dataClaimObj contains claim details
    * @param {object} dataProfileObj contains member information
    */
    mappingData(dataClaimObj, dataProfileObj){
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

    /**
    * Handle submit event
    * @param {object} event contains native functions to be used on widget
    */
    handleSubmit(event){
        event.preventDefault();
        window.location.assign('/checkclaim');
    }
    
    render() {
        return (
            null
        )
    }
}
import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Class representing Check Claim Details View Controller.
 * @extends Component
 */
class CheckClaimDetailsViewController extends Component {
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
}

export default CheckClaimDetailsViewController;

export function mappingData(dataClaimObj, dataProfileObj){
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

export function handleSubmit(event){
    event.preventDefault();
    window.location.assign('/checkclaim');
}
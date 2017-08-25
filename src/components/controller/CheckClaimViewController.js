import React, { Component } from 'react';
import MiniSignal from 'mini-signals';
import $ from 'jquery';
import * as Validator from '../../util/Validator.js';
import * as API from '../../util/API.js';

export const onTaxonomyDropdownClickedSignal = new MiniSignal();
export const onSubmitClickedSignal = new MiniSignal();
export const oncreateDropdownSignal = new MiniSignal();

/**
 * Class representing Check Claim View Controller.
 * @extends Component
 */

export class CheckClaimViewController extends Component {
    
    /**
     * Create a CheckClaimViewController.
     * 
     */
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
        this.onSubmitClicked = this.onSubmitClicked.bind(this);
        this.createDropdown = this.createDropdown.bind(this);
        this.onTaxonomyDropdownClicked = this.onTaxonomyDropdownClicked.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.validateClaimNumber = this.validateClaimNumber.bind(this);
    }
    
    /**
    * Function that will be automatically called when component is ready
    * 
    */
    componentDidMount() {
        //add signal listener
        this.binding = onTaxonomyDropdownClickedSignal.add(this.onTaxonomyDropdownClicked);
        this.binding = onSubmitClickedSignal.add(this.onSubmitClicked);
        this.binding = oncreateDropdownSignal.add(this.createDropdown);
    }
    
    /**
    * Handle submit event
    * @param {object} event contains native functions to be used on widget
    */
    onSubmitClicked(event){
        var claimNumber = $("#claim-number").val();
        var isValid = this.handleValidation(claimNumber);
        if(isValid){
            $(".loading").css("display","block");
            var url = "http://manulife-service.cfapps.io/manulife/claim/" + parseFloat(claimNumber);
            var postBody = '';
            API.ajaxRequest(url,postBody,'GET',function(response){
                //success
                var responseString = JSON.stringify(response)
                window.sessionStorage.setItem("dataClaim",responseString)
                window.location.assign('/claimdetails');
            }, function(error){
                //error
                $("#taxonomy").addClass("input-error");
                $("#claim-number").addClass("input-error");
                $(".claim-error-text").text("Sorry, the information you provided does not match our records. Please contact your Owner Services Team.");
                $(".loading").css("display","none");
            });
        }
    }

    /**
    * Mapping data to dropdown
    * @param {array} taxonomy collections to be mapped to dropdown
    */
    createDropdown(taxonomy){
        for(var i=0; i<taxonomy.length; i++){
            $("#taxDrpDown").append("<div>HIPPA CODE - " + taxonomy[i] +"</div>");
        }
    }

    /**
    * Open taxonomy dropdown
    */
    onTaxonomyDropdownClicked(){
        $("#taxDrpDown").toggleClass("show");
    }

    /**
    * Handle validation on check claim page before API function get called
    * @param {string} claimNumber number to be validated
    */
    handleValidation(claimNumber){
        var isValidClaimNumber = this.validateClaimNumber(claimNumber);
        var isValidTaxonomy = $("#taxonomy>p").text() !== "Please Select" ? true : false;
        var allValid = isValidClaimNumber.isValid && isValidTaxonomy ? true : false;
        if (!isValidClaimNumber.isValid && !isValidTaxonomy){
            $("input#claim-number").addClass("input-error");            
            if(isValidClaimNumber.errorMsg === "Please fill the correct claim number."){
                $("#taxonomy").removeClass("input-error");
            } else {
                $("#taxonomy").addClass("input-error");
                $("#claim-number").addClass("input-error");
            }            
            $(".claim-error-text").text(isValidClaimNumber.errorMsg);
        } else if (!isValidTaxonomy && isValidClaimNumber) {
            $("input#claim-number").removeClass("input-error");
            $("#taxonomy").addClass("input-error");
            $(".claim-error-text").text("Please select the taxonomy code");
        } else if (isValidClaimNumber.isValid && isValidTaxonomy){
            $("input#claim-number").removeClass("input-error");
            $("#taxonomy").removeClass("input-error");
            $(".claim-error-text").text("");
        } else {
            $("input#claim-number").addClass("input-error");
            $("#taxonomy").removeClass("input-error");
            $(".claim-error-text").text(isValidClaimNumber.errorMsg);
        }
        return allValid;
    }

    /**
    * Handle validation on claim number
    * @param {string} claimNumber number to be validated
    */
    validateClaimNumber(claimNumber){
        var isValid=true;
        var errorMsg = "";
        if(claimNumber === ""){
            isValid = false;
            errorMsg = "Please fill the mandatory fields.";
        } else {
            isValid = Validator.isNumber(claimNumber) && (claimNumber.length >=10) && (claimNumber.length <= 16);
            errorMsg = isValid ? "" : "Please fill the correct claim number.";
        }
        return {isValid:isValid,errorMsg:errorMsg};
    }
    
    render() {
        return (
            null
        )
    }
}
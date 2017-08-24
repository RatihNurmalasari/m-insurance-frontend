import React, { Component } from 'react';
import $ from 'jquery';
import * as Validator from '../util/Validator.js';
import * as API from '../util/API.js';

/**
 * Class representing Check Claim Form.
 * @extends Component
 */
class CheckClaim extends Component {
    /**
    * Create CheckClaimForm
    * @param {object} props object that will construct CheckClaimForm including the functions in it
    */
    constructor(props){
        super(props);
        this.onSubmitClicked=this.onSubmitClicked.bind(this);
        this.createDropdown=this.createDropdown.bind(this);
        this.onTaxonomyDropdownClicked=this.onTaxonomyDropdownClicked.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.validateClaimNumber=this.validateClaimNumber.bind(this);
    }
    
    /**
    * Function that will be automatically called when component is ready
    * 
    */
    componentDidMount(){
        //request for taxonomy numbers
        var taxonomyDummy = [8282474042,8282727332];
        this.createDropdown(taxonomyDummy);
        //handle click on dropdown
        $("#taxDrpDown>div").click(function(e){
            var selectedText = $(this).text()
            $("#taxonomy>p").text(selectedText);
            $("#taxDrpDown").toggleClass("show");
        })
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
    * @param {array} taxonomyDummy collections of data to be mapped to dropdown
    */
    createDropdown(taxonomyDummy){
         for(var i=0; i<taxonomyDummy.length; i++){
             $("#taxDrpDown").append("<div>HIPPA CODE - " + taxonomyDummy[i] +"</div>");
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
    
    /**
    * Render is a function to return html tags to be rendered
    * @returns {html} Html tags to be rendered 
    */    
    render() {
        return (
            <div className="check-claim">
            <img src="assets/images/image_check_claim_status.png" alt="manulife-background"></img>
            <div className="claimText">
            <p>Fill in information</p>

            </div>
            <p className="claim-error-text"></p>
            <form className="claim-form">
            <span className="claim-number">
            <p>ClaimNumber*</p>

            <input type="text" id="claim-number" placeholder="Please Enter"/>
            </span>
            <span className="taxonomy">
            <p>Taxonomy*</p>

            <div className="taxonomy-container">
            <div type="text" id="taxonomy" onClick={this.onTaxonomyDropdownClicked}><p>Please Select</p></div>
            <span className="taxonomy-img"></span>
                <div id="taxDrpDown" className="dropdown-content">
                </div>
            </div>
            </span>
            </form>
            <div className="claim-submit-container">
            <button type="button" onClick={this.onSubmitClicked}>SUBMIT</button>
            </div>
            <div className="loading">Loading&#8230;</div>
            </div>

        );
    }
}

export default CheckClaim;
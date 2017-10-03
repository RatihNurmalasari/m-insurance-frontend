import React, { Component } from 'react';
import $ from 'jquery';
import * as Validator from '../util/Validator.js';
import * as API from '../util/API.js';

class CheckClaimForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.createDropdown=this.createDropdown.bind(this);
        this.openTaxonomy=this.openTaxonomy.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.validateClaimNumber=this.validateClaimNumber.bind(this);
    }
    
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
    
    handleSubmit(event){
        var claimNumber = $("#claim-number").val();
        var isValid = this.handleValidation(claimNumber);
        if(isValid){
            $(".loading").css("display","block");
            var url = "http://172.17.10.213:6060/manulife/claim/" + parseFloat(claimNumber);
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
    
    createDropdown(taxonomyDummy){
         for(var i=0; i<taxonomyDummy.length; i++){
             $("#taxDrpDown").append("<div>HIPPA CODE - " + taxonomyDummy[i] +"</div>");
         }
    }
    
    openTaxonomy(){
        $("#taxDrpDown").toggleClass("show");
    }
    
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
            <div className="check-claim">
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
            <div type="text" id="taxonomy" onClick={this.openTaxonomy}><p>Please Select</p></div>
            <span className="taxonomy-img"></span>
                <div id="taxDrpDown" className="dropdown-content">
                </div>
            </div>
            </span>
            </form>
            <div className="claim-submit-container">
            <button type="button" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
            <div className="loading">Loading&#8230;</div>
            </div>

        );
    }
}

export default CheckClaimForm;
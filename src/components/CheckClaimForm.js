import React, { Component } from 'react';
import $ from 'jquery';
import * as Validator from './Validator.js';

class CheckClaimForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleGetData=this.handleGetData.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.validateClaimNumber=this.validateClaimNumber.bind(this);
    }

    handleSubmit(event){
        var claimNumber = $("#claim-number").val();
        var isValid = this.handleValidation(claimNumber);
        if(isValid){
            $(".loading").css("display","block");
            // setTimeout(function(){ window.location.assign('/claimdetails'); }, 1000);
            this.handleGetData(parseFloat(claimNumber),function(response){
                //success
                var responseString = JSON.stringify(response)
                window.sessionStorage.setItem("dataClaim",responseString)
                window.location.assign('/claimdetails');
            }, function(error){
                //error
                window.location.assign('/claimdetails');
            });
        }
    }
    
    handleValidation(claimNumber){
        var isValidClaimNumber = this.validateClaimNumber(claimNumber);
        var allValid = isValidClaimNumber.isValid ? true : false;
        if (!isValidClaimNumber.isValid){
            $("input#claim-number").addClass("input-error");
            $(".claim-error-text").text(isValidClaimNumber.errorMsg);
        } else {
            $("input#claim-number").removeClass("input-error");
            $(".claim-error-text").text("");
        }
        return allValid;
    }
    
    validateClaimNumber(claimNumber){
        var isValid=true;
        var errorMsg = "";
        if(claimNumber === ""){
            isValid = false;
            errorMsg = "Please fill the mandatory fields.";
        }else {
            isValid = Validator.isNumber(claimNumber);
            errorMsg = isValid ? "" : "Please fill the correct claim number.";
        }
        return {isValid:isValid,errorMsg:errorMsg};
    }

    handleGetData(claimNumber,successCallback, errorCallback){
        // var url = 'http://manulife-claim-dockermgmt.centralus.cloudapp.azure.com:6060/manulife/claim/' + claimNumber;
        var url = 'http://localhost:8080/manulife/claim/' + claimNumber;
        var options = {
            url:  url,
            dataType: 'json',
            cache: false,
            beforeSend: function(xhr){xhr.setRequestHeader('clientID', 'menulife');
                                      xhr.setRequestHeader('tokenID', 'MANULIFEWEBAPP');
                                      xhr.setRequestHeader('sessionID', 'xsiood34567$232')},
            success: function(response, textStatus, xhr) {
                if(successCallback !== null) {
                    successCallback(response, textStatus);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if(errorCallback){
                    errorCallback(jqXHR);
                }
            }
        };
        $.support.cors = true;
        $.ajax(options);
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
            
            <input type="text" id="claim-number"/>
            </span>
            <span className="taxonomy">
            <p>Taxonomy*</p>
            
            <div className="taxonomy-container">
            <input type="text" id="taxonomy"/>
            <span className="taxonomy-img"></span>
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
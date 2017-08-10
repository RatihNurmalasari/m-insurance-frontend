import React, { Component } from 'react';
import $ from 'jquery';
import * as Validator from './Validator.js';

class CheckClaimForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.createDropdown=this.createDropdown.bind(this);
        this.openTaxonomy=this.openTaxonomy.bind(this);
        this.handleGetData=this.handleGetData.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
        this.validateClaimNumber=this.validateClaimNumber.bind(this);
    }
    
    componentDidMount(){
        //request for taxonomy numbers
        var taxonomyDummy = [8282474042,8282727332,8282474055,8282432157,8282214785,8283574042];
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
    
    createDropdown(taxonomyDummy){
         for(var i=0; i<taxonomyDummy.length; i++){
             $("#taxDrpDown").append("<div>" + "HIPPA CODE - " + taxonomyDummy[i] +"</div>");
         }
    }
    
    openTaxonomy(){
        $("#taxDrpDown").toggleClass("show");
    }
    
    handleValidation(claimNumber){
        var isValidClaimNumber = this.validateClaimNumber(claimNumber);
        var isValidTaxonomy = $("#taxonomy>p").text() !== "" ? true : false;
        var allValid = isValidClaimNumber.isValid && isValidTaxonomy ? true : false;
        if (!isValidClaimNumber.isValid && !isValidTaxonomy){
            $("input#claim-number").addClass("input-error");            
            if(isValidClaimNumber.errorMsg == "Please fill the correct claim number."){
                $("#taxonomy").removeClass("input-error");
            } else {
                $("#taxonomy").addClass("input-error");
                $("#claim-number").addClass("input-error");
            }            
            $(".claim-error-text").text(isValidClaimNumber.errorMsg);
        } else if (!isValidClaimNumber.isValid && isValidTaxonomy || !isValidClaimNumber.isValid && !isValidTaxonomy) {
            $("input#claim-number").addClass("input-error");
            $("#taxonomy").removeClass("input-error");
            $(".claim-error-text").text(isValidClaimNumber.errorMsg);
        } else if (!isValidTaxonomy && isValidClaimNumber) {
            $("input#claim-number").removeClass("input-error");
            $("#taxonomy").addClass("input-error");
            $(".claim-error-text").text("Please select the taxonomy code");
        } else {
            $("input#claim-number").removeClass("input-error");
            $("#taxonomy").removeClass("input-error");
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
        var url = 'http://manulife-claim-dockermgmt.centralus.cloudapp.azure.com:6060/manulife/claim/' + claimNumber;
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
            <div type="text" id="taxonomy" onClick={this.openTaxonomy}><p></p></div>
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
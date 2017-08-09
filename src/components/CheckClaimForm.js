import React, { Component } from 'react';
import $ from 'jquery';
import superagent from 'superagent';

class CheckClaimForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleGetData=this.handleGetData.bind(this);
    }

    handleSubmit(event){
        var claimNumber = $("#claim-number").val();
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
            }.bind(this),
            error: function(jqXHR, textStatus, errorThrown) {
                if(errorCallback){
                    errorCallback(jqXHR);
                }
            }.bind(this)
        };
        $.support.cors = true;
        $.ajax(options);
    }

    componentDidMount(){
        console.log('componentDidMount');

    }

    render() {
        return (
            <div className="check-claim">
            <div className="claimText">
            <p>Fill in information</p>
            <a id="back-prev-page">Back to previous page</a>
            </div>
            <form className="claim-form">
            <span className="claim-number">
            <p>ClaimNumber*</p>
            <p className="claim-number-error"></p>
            <input type="text" id="claim-number"/>
            </span>
            <span className="taxonomy">
            <p>Taxonomy*</p>
            <p className="taxonomy-error"></p>
            <div className="taxonomy-container">
            <input type="text" id="taxonomy"/>
            <span className="taxonomy-img"></span>
            </div>
            </span>
            </form>
            <div className="claim-submit-container">
            <button type="button" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
            </div>

        );
    }
}

export default CheckClaimForm;
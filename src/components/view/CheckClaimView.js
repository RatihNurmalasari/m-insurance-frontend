import React, { Component } from 'react';
import {CheckClaimViewController,
        onTaxonomyDropdownClickedSignal,
        onSubmitClickedSignal,
        oncreateDropdownSignal
       } from '../controller/CheckClaimViewController.js';
import $ from 'jquery';

/**
 * Class representing Check Claim.
 * @extends Component
 */
class CheckClaim extends Component {
    
    /**
    * Function that will be automatically called when component is ready
    * 
    */
    componentDidMount(){
        //request for taxonomy numbers
        var taxonomyDummy = [8282474042,8282727332];
        oncreateDropdownSignal.dispatch(taxonomyDummy);
        //handle click on dropdown
        $("#taxDrpDown>div").click(function(e){
            var selectedText = $(this).text()
            $("#taxonomy>p").text(selectedText);
            $("#taxDrpDown").toggleClass("show");
        })
    }

    /**
    * Open dropdown and call signal
    * @param {object} event contains native functions to be used on widget
    */
    openDropdown(event){
        onTaxonomyDropdownClickedSignal.dispatch(event)
    }

    /**
    * Handle submit event and call signal
    * @param {object} event contains native functions to be used on widget
    */
    submitClick(event){
        onSubmitClickedSignal.dispatch(event)
    }
    /**
    * Render is a function to return html tags to be rendered
    * @returns {HTML} HTML tags to be rendered 
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
            <div type="text" id="taxonomy" onClick={this.openDropdown}><p>Please Select</p></div>
            <span className="taxonomy-img"></span>
            <div id="taxDrpDown" className="dropdown-content">
            </div>
            </div>
            </span>
            </form>
            <div className="claim-submit-container">
            <button type="button" onClick={this.submitClick}>SUBMIT</button>
            </div>
            <div className="loading">Loading&#8230;</div>
            <CheckClaimViewController/>
            </div>

        );
    }
}

export default CheckClaim;
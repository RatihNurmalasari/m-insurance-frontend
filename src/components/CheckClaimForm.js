import React, { Component } from 'react';

class CheckClaimForm extends Component {
    handleSubmit(event){
        window.location.assign('/claimdetails');
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
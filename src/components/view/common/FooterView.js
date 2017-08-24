import React, { Component } from 'react';

/**
 * Class representing Footer.
 * @extends Component
 */
class FooterView extends Component {    
    /**
    * Render is a function to return html tags to be rendered
    * @returns {HTML} HTML tags to be rendered 
    */ 
    render() {
        return (
            <div className="footer-container">
                <img src="assets/images/Footer.png" alt="manulife-background"></img>
            </div>
        );
    }
}

export default FooterView
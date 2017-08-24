import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Class representing Header.
 * @extends Component
 */
class HeaderView extends Component {
    
    /**
    * Function that will be automatically called when component is ready
    * 
    */
    componentDidMount(){
        if(window.location.href.indexOf("/checkclaim") <= -1 && window.location.href.indexOf("/claimdetails") <= -1 ){
            $(".header-container>img").attr("src","assets/images/Header - User not logged in.png")
        }
    }
        
    /**
    * Render is a function to return HTML tags to be rendered
    * @returns {HTML} HTML tags to be rendered 
    */ 
    render() {
        return (
            <div className="header-container">
                <img src="assets/images/Header - User logged in.png" alt="manulife-background"></img>
            </div>
        );
    }
}

export default HeaderView;
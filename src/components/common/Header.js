import React, { Component } from 'react';
import $ from 'jquery';

/**
 * Class representing Header.
 * @extends Component
 */
class Header extends Component {
    
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
    * This function will render the sub menu component for personal user
    * @param {object} event contains native functions to be used on widget
    */
    onPersonalClicked(event){
        
    }
    
    /**
    * This function will render the sub menu component for business user
    * @param {object} event contains native functions to be used on widget
    */
    onBusinessClicked(event){
        
    }
    
    /**
    * This function will change the content text based on selected languange
    * @param {string} languange the selected languange
    */
    onSelectLanguangeClicked(languange){
        
    }
    
    /**
    * Redirected page to contact us page
    * @param {object} event contains native functions to be used on widget
    */
    onContactUsClicked(event){
        
    }
    
    /**
    * Handle search function and redirected page to search result page
    * @param {string} searchText the sentence to be searched
    */
    onSearchClicked(searchText){
        
    }
    
    /**
    * Open login view overlay
    * @param {object} event contains native functions to be used on widget
    */
    onSignInClicked(event){
        
    }
    
    /**
    * Handle sign out functions and redirected page to home page
    * @param {object} event contains native functions to be used on widget
    */
    onSignOutClicked(event){
        
    }
    
    /**
    * Open navigation menu
    * @param {string} menu the menu to be opened
    */
    onNavMenuClicked(menu){
        
    }
    
    /**
    * Render is a function to return html tags to be rendered
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

export default Header;
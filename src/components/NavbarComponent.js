import React from 'react';
import $ from 'jquery';
import '../css/index.css';
$(document).ready(function(){
    $(".btnMenu").click(function(){
        hamburgerMenu();
    });
});
function burgerAnim() {

    if ( $( ".menu_items" ).hasClass( "expanded" ) ) {
  
      $( ".menuLn1" ).removeAttr( "style" );
      $( ".menuLn2" ).removeAttr( "style" );
      $( ".menuLn3" ).removeAttr( "style" );
  
    } else {
  
      $( ".menuLn1" ).css( "transform", "rotate(45deg)" );
      $( ".menuLn1" ).css( "background-color", "#000" );
      $( ".menuLn1" ).css( "width", "56.57px" );
  
      $( ".menuLn2" ).css( "transform", "scaleY(0)" );
      $( ".menuLn2" ).css( "background-color", "#000" );
  
      $( ".menuLn3" ).css( "transform", "rotate(-45deg)" );
      $( ".menuLn3" ).css( "background-color", "#000" );
      $( ".menuLn3" ).css( "width", "56.57px" );
  
    }
  
  }
  
  /**
   *
   * @param {boolean} bool the state of the menu
   */
  function hamburgerMenu( bool ) {
  
    if ( !$( ".menu_items" ).hasClass( "expanded" ) && typeof bool == "undefined" ) {
  
      bool = true;
      $( ".menu_items" ).css( "transform", "translateX(0)" );
      burgerAnim();
      $( ".menu_items" ).addClass( "expanded" );
  
    } else if ( $( ".menu_items" ).hasClass( "expanded" ) ) {
  
      $( ".menu_items" ).css( "transform", "translate(-150%)" );
      burgerAnim();
      $( ".menu_items" ).removeClass( "expanded" );
  
    }
    $( "#overlay" ).slideToggle( "slow" );
  
  }

class NavbarComponent extends React.Component {

    render() {
        return(
        <div className="navbar">
		    <div className="btnMenu">
                <span className="line menuLn1"></span>
                <span className="line menuLn2"></span>
                <span className="line menuLn3"></span>
		    </div>
		    <img id="logo" src="./index_files/Official_Alumni_Association_Logo_11-17-20.png" alt="Alumni Association Logo"/>
            <ul className="menu_items">
                <li className="menu" id="login"><a href="login.htm">Log In</a></li>
                <li className="menu" id="profile"><a href="profile.htm">Profile</a></li>
                <li className="menu" id="messages"><a href="messages.htm">Messages</a></li>
                <li className="menu" id="friends"><a href="friends.htm">Friends</a></li>
            </ul>
        </div>
        )
    }
}
export default NavbarComponent;
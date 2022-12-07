/**
 * @file This file contains the code for the home feed, as well as posting logic.
 * @author Jonathan Lewis
 */
import { PostDialogComponent } from "../components/PostDialogComponent.js";
import { ActionButtonComponent } from "../components/ActionButtonComponent.js";
$( document ).ready( function() {

  // eslint-disable-next-line no-var
  var uname, uid, metadata, filepath;
  /*const openPostDialog = ReactDOM.createRoot( document.getElementById( "openPostDialog" ) );
  openPostDialog.render( React.createElement( ActionButtonComponent ) );*/
  $.ajax( {
    url: "php/feed.php/",
    type: "POST",
    data: { opcode: "get" },
    success: function( data ) {

      metadata = JSON.parse( data );
      uname = metadata.uname;
      uid = metadata.uid;
      filepath = metadata.filepath;
      filepath = "./php/uploads/" + filepath;
      localStorage.setItem( "uname", uname );
      localStorage.setItem( "filepath", filepath );

    }
  } );

  $( "#home_display" ).on( "scroll", function() {

    hideNavBar();

  } );

  $( "#openPostDialog" ).click( function() {

    const e = React.createElement;
    const postDialog = document.querySelector( "#postDialogBox" );
    const root = ReactDOM.createRoot( postDialog );
    root.render( e( PostDialogComponent ) );
    $( "#openPostDialog" ).fadeOut( 500 );

  } );
  $( "#postImage" ).change( function( e ) {

    previewPicture( e );

  } );

  $( "#postForm" ).submit( function( e ) {

    e.preventDefault();

    // const post = new Post( uname, generatePostData(), generatePostDate, uid, [] );
    // console.log( post );

  } );

} );
let lastScrollTop = 0;

/**
 * @description This function will hide the navbar when the user scrolls down and show it when they scroll up.
 * @returns {void}
 */
function hideNavBar() {

  const delta = 5;
  const nowScrollTop = $( "#home_display" ).scrollTop();

  if ( Math.abs( lastScrollTop - nowScrollTop ) >= delta ) {

    if ( nowScrollTop > lastScrollTop ) {

      console.log( nowScrollTop );
      console.log( lastScrollTop );

      // ACTION ON
      // SCROLLING DOWN
      $( ".navbar" ).fadeOut( "medium" );

    } else {

      /* ACTION ON
      * SCROLLING UP
      */

      $( ".navbar" ).fadeIn( "medium" );

    }

  }
  lastScrollTop = nowScrollTop;

}

/**
 * @param {*} input The input element that contains the desired image.
 * @description This function will preview the image that the user has selected.
 * @returns {void}
 */
function previewPicture( input ) {

  if ( input.target.files ) {

    const canvas = document.getElementById( "pictureCanvas" ); // Get the canvas
    const ctx = canvas.getContext( "2d" );
    const img = input.target.files[ 0 ];
    const reader = new FileReader(); // Create a file reader
    reader.readAsDataURL( img );
    reader.onloadend = function( e ) { // When the reader is done

      const image = new Image();
      image.src = e.target.result;
      image.onload = function() {

        console.log( "height: " + image.height + "width: " + image.width );
        ctx.width = image.width * 0.5; // Set the canvas to half the size of the image
        ctx.height = image.height; // Set the canvas to half the size of the image
        canvas.setAttribute( "width", image.width );
        canvas.setAttribute( "height", image.height );
        ctx.drawImage( image, 0, 0, image.height, image.width ); // Draw the image to the canvas

      };

    };

  }

}

/**
 *
 */
function generatePostData() {

  const data = new FormData( document.getElementById( "postForm" ) );
  return data;

}

/**
 *
 * @param post
 */

/**
 *
 */
function generatePostDate() {

  const postDate = new Date();
  return postDate.now();

}

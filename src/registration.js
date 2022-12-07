// eslint-disable-next-line no-var
var fname, lname, uname, email, pword, classyear;

// eslint-disable-next-line no-var
var tags = {}; // Create an object to hold the tags

$( document ).ready( function() {

  // alert("loaded!");

  loadClassYears();

  $( "#registration_form" ).submit( function( e ) {

    e.preventDefault();

    getRegistrationInfo();

  } );

  $( "#picPicker" ).change( function( e ) {

    previewPicture( e );

  } );

  $( "#pictureForm" ).submit( function( e ) {

    e.preventDefault();

    uploadProfilePic();

  } );

  $( "#done" ).on( "click", function() {

    sendTags();

  } );

  $( document ).on( "click", ".tag", function( e ) {

    selectTag( this );

    e.stopImmediatePropagation();

  } );

} );

/* Picture Uploader Functions */

/**
 *
 * @param {*} input Profile Picture
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

        ctx.height = image.height * 0.5; // Set the canvas to half the size of the image

        ctx.drawImage( image, 0, 0, 500, 500 ); // Draw the image to the canvas

      };

    };

  }

}

/**
 * @description Uploads the profile picture to the server
 */
function uploadProfilePic() {

  // const canvas = document.getElementById( "pictureCanvas" );

  const formDatum = new FormData( document.getElementById( "pictureForm" ) );

  formDatum.append( "opcode", 2 );

  $.ajax( {

    type: "POST",

    url: "php/login.php/",

    data: formDatum,

    processData: false,

    contentType: false,

    success: function( response ) {

      if ( response == 1 ) {

        console.log( "Uploaded" );

        loadTags();

      } else {

        console.log( response );

      }

    }

  } );

}

/*      Tagging Functions */

/**
 * @param {string} t Tag
 */
function selectTag( t ) {

  if ( !t.classList.contains( "selected" ) ) {

    tags[ t.id ] = 1;

    t.classList.toggle( "selected" );

  } else {

    delete tags[ t.id ];

    t.classList.toggle( "selected" );

  }

  console.log( tags );

}

/**
 *
 */
function sendTags() {

  const json = JSON.stringify( tags );

  $.ajax( {

    type: "POST",

    url: "php/tags.php/",

    data: { json },

    success: loadFeed()

  } );

}

// Loaders

/**
 *
 */
function loadPhotoUploader() {

  $( ".display_panel" ).addClass( "uploading" );

  $( "#registration_pane" ).load( "htm/uploadPic.htm" );

}

/**
 *
 */
function loadTags() {

  $( ".display_panel" ).removeClass( "uploading" );

  $( ".display_panel" ).addClass( "tagging" );

  $( "#registration_pane" ).load( "php/tags.php" );

}

/**
 *
 */
function loadClassYears() {

  $.ajax( {

    type: "POST",

    url: "php/login.php/",

    data: { opcode: 3 },

    success: function( response ) {

      const years = JSON.parse( response );

      for ( let i = 0; i < years.length; i++ ) {

        // eslint-disable-next-line computed-property-spacing, space-in-parens

        const appendix = "<option value='" + years[ i ] + "'>" + years[ i ] + "</option>";

        $( "#class_year" ).append( appendix );

      }

    }

  } );

}

/**
 *

 */

/**
 *
 */
function loadFeed() {

  $( ".display_panel" ).load( "htm/home.htm" );

  $( ".display_panel" ).removeClass( "tagging" );

  $( ".display_panel" ).removeClass( "register" );

  $( ".display_panel" ).addClass( "feed" );

}

/* Registration Functions */

/**

 *

 */

/**
 *
 */
function getRegistrationInfo() {

  // Pull the data from the form

  fname = $( "#fname" ).val();

  lname = $( "#lname" ).val();

  uname = $( "#uname" ).val();

  email = $( "#email" ).val();

  pword = $( "#password" ).val();

  classyear = $( "#class_year" ).val();

  // Set Session Variables

  localStorage.setItem( "fname", fname );

  localStorage.setItem( "lname", lname );

  localStorage.setItem( "uname", uname );

  localStorage.setItem( "email", email );

  localStorage.setItem( "pword", pword );

  localStorage.setItem( "classyear", classyear );

  sendRegistrationInfo();

}

/**
 *

 */

/**
 *
 */
function sendRegistrationInfo() {

  if ( $( "#confirm_email" ).val() == email && $( "#confirm_password" ).val() == pword ) { // Validate the data

    // Send the data to the server

    $.ajax( {

      type: "POST",

      url: "php/login.php/",

      data: { fname, lname, uname, email, pword, classyear, validation: 1, opcode: 1 },

      success: function() {

        loadPhotoUploader();

        localStorage.removeItem( "pword" );

      },

      error: function() {

        alert( "Failure!" );

      }

    } );

  }

}

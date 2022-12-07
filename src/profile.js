$( document ).ready( function() {

  $( "#reviewInfo" ).on( "click", function() {

    loadProfileInfo();

  } );

  $( "#updateInfo" ).on( "click", function() {

    updateProfileInfo();

  } );

} );

/**
 *
 */
function loadProfileInfo() {

  $.ajax( {

    url: "php/profile.php",

    type: "get",

    data: { uname: localStorage.getItem( "username" ) },

    dataType: "json"

  } ).done( function( response ) {

    console.log( response );

    const fname = response.fname;

    const lname = response.lname;

    const uname = response.uname;

    const email = response.email;

  } );

}

/**
 *
 */

/**
 *
 */
function updateProfileInfo() {

  $( ".display_panel" ).load( "php/updateProfile.php" );

  $.ajax( {

    url: "php/profile.php",

    type: "get",

    data: { uname: localStorage.getItem( "username" ) },

    dataType: "json"

  } ).done( function( response ) {

    const fname = response.fname;

    const lname = response.lname;

    const uname = response.uname;

    const email = response.email;

    $( "#fname" ).attr( "placeholder", fname );

    $( "#lname" ).attr( "placeholder", lname );

    $( "#uname" ).attr( "placeholder", uname );

    $( "#email" ).attr( "placeholder", email );

    $( "btnRegister" ).attr( "placeholder", "Update your Information" );

  } );

  $( "#registration_form" ).submit( function() {

    $.ajax( {

      url: "php/updateProfile.php",

      type: "post",

      data: { uname, fname, lname, email }

    } );

  } );

}

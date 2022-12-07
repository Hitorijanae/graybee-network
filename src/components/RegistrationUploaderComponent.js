import React from 'react';
import $ from 'jquery';
import '../css/registration.css'

class RegistrationUploaderComponent extends React.Component {
    previewPicture( input ) {

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
    uploadProfilePic(e) {
        e.preventDefault();

        // const canvas = document.getElementById( "pictureCanvas" );
      
        const formDatum = new FormData( document.getElementById( "pictureForm" ) );
      
        formDatum.append( "opcode", 2 );

        fetch( "http://localhost/php/login.php", {
            method : "POSt",
            body : formDatum
        }).then( function( response ) {
            if( response.ok ) {
                console.log( "Picture uploaded!" );
                window.location.href="tags.htm";
            }
            else{
                console.log(response);
            }
        });
    }
      

    render(){
        return(
            <div id="registration_pane">
                <form id="pictureForm" onSubmit={this.uploadProfilePic}>
                    <canvas id="pictureCanvas" width="500px" height="500px"></canvas>
                    <input onChange={this.previewPicture} type="file" accept="image/*" id="picPicker" name="picPicker" />
                    <input type="submit" placeholder="Upload!"/>
                </form>
            </div>
        )
    }
}
export default RegistrationUploaderComponent;
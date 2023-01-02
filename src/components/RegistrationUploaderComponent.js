import React from 'react';
import $ from 'jquery';
import '../css/registration.css'
import axios from 'axios';

class RegistrationUploaderComponent extends React.Component {
    previewPicture( input ) {

        const viewportWidth=$(window).width();
        
        if ( input.target.files ) {
      
          const canvas = document.getElementById( "pictureCanvas" ); // Get the canvas
          canvas.width = 0.25*viewportWidth;
          canvas.height = 0.25*viewportWidth;
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
      
              ctx.drawImage( image, 0, 0, 0.25*viewportWidth, 0.25*viewportWidth ); // Draw the image to the canvas
      
            };
      
          };
      
        }
      
      }
    loadTags = async(e) =>{
        e.preventDefault();
        let response = await this.uploadProfilePic(e);
        if(response.data === 1){
            window.location.href = "http://localhost:3000/tags.htm";
        }
    }
    uploadProfilePic(e) {
        e.preventDefault();

        // const canvas = document.getElementById( "pictureCanvas" );
      
        const formDatum = new FormData( document.getElementById( "pictureForm" ) );
      
        formDatum.append( "opcode", 2 );

        /*fetch( "http://localhost/php/login.php", {
            method : "POSt",
            body : formDatum
        }).then( function( response ) {
            if( response.ok ) {
                console.log( "Picture uploaded!" );
                //window.location.href="tags.htm";
            }
            else{
                console.log(response);
            }
        });*/
        return(axios
        .post("http://localhost/login.php", formDatum, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        })
        );
    }
      

    render(){
        return(
            <div id="registration_pane">
                <form id="pictureForm" onSubmit={this.loadTags}>
                    <canvas id="pictureCanvas" width=".25vw" height=".25vw"></canvas>
                    <input onChange={this.previewPicture} type="file" accept="image/*" id="picPicker" name="picPicker" />
                    <input type="submit" placeholder="Upload!"/>
                </form>
            </div>
        )
    }
}
export default RegistrationUploaderComponent;
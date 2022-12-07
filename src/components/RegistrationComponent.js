import $ from 'jquery';
import React from 'react' ;
import '../css/registration.css'

var fname, lname, uname, email, pword, classyear;

// eslint-disable-next-line no-var


// Loaders

/**
 *
 */

/**
 *
 */


/**
 *
 */
/*function loadClassYears() {

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

}*/

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


/**
 *

 */

/**
 *
 */



class RegistrationComponent extends React.Component{

  constructor(props){
    super(props);
    this.sendRegistrationInfo = this.sendRegistrationInfo.bind(this);
    this.getRegistrationInfo = this.getRegistrationInfo.bind(this);
  }
  
  loadPhotoUploader(){
    window.location.href = "http://localhost:3000/uploadPic.htm";
  }


  
  sendRegistrationInfo() {

    if ( $( "#confirm_email" ).val() == email && $( "#confirm_password" ).val() == pword ) { // Validate the data
  
      // Send the data to the server
      const formDatum = new FormData();
      formDatum.append("fname", fname);
      formDatum.append("lname", lname);
      formDatum.append("uname", uname);
      formDatum.append("email", email);
      formDatum.append("pword", pword);
      formDatum.append("classyear", classyear);
      formDatum.append("validation", 1);
      formDatum.append("opcode", 1);

      fetch("http://localhost/php/login.php", {
        method: "POST", 
        body: formDatum
      }).then(response => {
        if(response.ok){
          this.loadPhotoUploader();
          localStorage.removeItem( "pword" );
        }else{
          alert("Failure!");
        }
      });
    }
  
  }
  getRegistrationInfo(e) {
    e.preventDefault();

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

    alert( "Registration Info: " + fname + " " + lname + " " + uname + " " + email + " " + pword + " " + classyear)
  
    this.sendRegistrationInfo();
  
  }
    loadClassYears(){
      const opcode= new FormData();
      opcode.append("opcode", 3);
        fetch("http://localhost/php/login.php", {
            method: "POST",
            /*headers: {
                "Content-Type": "multipart/form-data"
            },*/
            body: opcode
        }).then(response => response.json()).then(data => {
            for(let i = 0; i < data.length; i++){
                const appendix = "<option value='" + data[i] + "'>" + data[i] + "</option>";
                document.getElementById("class_year").innerHTML += appendix;
            }
        });

    }
    componentDidMount(){
        this.loadClassYears();
    }
    render(){
        return(
            <div id="registration_pane">
                <div id="registration_box">
                    <img id="formlogo" src="assets/Official_Alumni_Association_Logo_11-17-20.png" alt="Alumni Association Logo" />
                    <form id="registration_form" onSubmit={this.getRegistrationInfo}>
                        <input type="text" id="fname" placeholder="First Name" autoComplete="given-name"/>
                        <input type="text" id="lname" placeholder="Last Name" autoComplete="family-name"/>
                        <input type="email" id="email" placeholder="Email Address" autoComplete="email"/>
                        <input type="email" id="confirm_email" placeholder="Confirm Email Address" autoComplete="email"/>
                        <input type="text" id="uname" placeholder="Username" autoComplete="current-user"/>
                        <input type="password" id="password" placeholder="Password" autoComplete="current-password"/>
                        <input type="password" id="confirm_password" placeholder="Confirm Password"/>
                        <select id="class_year" />
                        <input type="submit" placeholder="Sign Up"/>
                    </form>
                </div>  
            </div>
        )
    }
}
export default RegistrationComponent;
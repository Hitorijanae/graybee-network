import $ from 'jquery';
import React from 'react' ;
import '../css/registration.css'
import axios from 'axios';

//var fname, lname, uname, email, pword, classyear;

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
    //this.getRegistrationInfo = this.getRegistrationInfo.bind(this);
    this.state={
      fname: "",
      lname: "",
      uname: "",
      email: "",
      pword: "",
      classyear: ""
    }

  }
  
  loadPhotoUploader = async(e) =>{
    e.preventDefault();
    let response = await this.sendRegistrationInfo();
    console.log(response);
    if(response.data === 1){
      window.location.href = "http://localhost:3000/uploadPic.htm";
    }
  }


  
  sendRegistrationInfo = async () => {

    alert("called!")
    console.log(this.state)
    //console.log($( "#confirm_email" ).val() + " " + this.state.email + " " + $( "#confirm_password" ).val() + " " + this.state.pword);
    if ( $( "#confirm_email" ).val() == this.state.email && $( "#confirm_password" ).val() == this.state.pword ) { // Validate the data
      alert("validated!")
      // Send the data to the server
      const formDatum = new FormData();
      formDatum.append("fname", this.state.fname);
      formDatum.append("lname", this.state.lname);
      formDatum.append("uname", this.state.uname);
      formDatum.append("email", this.state.email);
      formDatum.append("pword", this.state.pword);
      formDatum.append("classyear", this.state.classyear);
      formDatum.append("validation", 1);
      formDatum.append("opcode", 1);
      return(axios
      .post("http://localhost/php/login.php", formDatum, {
        headers: {
          'Content-Type': 'multipart/form-data',
        
        },
        withCredentials: true,
      }).then(
        response => {
          console.log(response);
          return response;
        }
      ));
  
    }
  }
  /*getRegistrationInfo(e) {
    e.preventDefault();

    // Pull the data from the form
  
    // Set Session Variables
  
    localStorage.setItem( "fname", this.state.fname );
  
    localStorage.setItem( "lname", this.state.lname );
  
    localStorage.setItem( "uname", this.state.uname );
  
    localStorage.setItem( "email", this.state.email );
  
    localStorage.setItem( "pword", this.state.pword );
  
    localStorage.setItem( "classyear", this.state.classyear );

    
  
    this.sendRegistrationInfo();
  
  }*/
    loadClassYears(){
      const opcode= new FormData();
      opcode.append("opcode", 3);
        /*fetch("http://localhost/php/login.php", {
            method: "POST",
            /*headers: {
                "Content-Type": "multipart/form-data"
            },
            body: opcode
        }).then(response => response.json()).then(data => {
            for(let i = 0; i < data.length; i++){
                const appendix = "<option value='" + data[i] + "'>" + data[i] + "</option>";
                document.getElementById("class_year").innerHTML += appendix;
            }
        });*/
        axios
        .post("http://localhost/php/login.php", opcode, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }).then(
          response => {
            for(let i = 0; i < response.data.length; i++){
              const appendix = "<option value='" + response.data[i] + "'>" + response.data[i] + "</option>";
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
                    <form id="registration_form" onSubmit={this.loadPhotoUploader}>
                        <input type="text" id="fname" placeholder="First Name" autoComplete="given-name" onChange={(e) => this.setState({fname: e.target.value})}/>
                        <input type="text" id="lname" placeholder="Last Name" autoComplete="family-name" onChange={(e) => this.setState({lname: e.target.value})}/>
                        <input type="email" id="email" placeholder="Email Address" autoComplete="email" onChange={(e) => this.setState({email: e.target.value})}/>
                        <input type="email" id="confirm_email" placeholder="Confirm Email Address" autoComplete="email"/>
                        <input type="text" id="uname" placeholder="Username" autoComplete="current-user" onChange={(e) => this.setState({uname: e.target.value})}/>
                        <input type="password" id="password" placeholder="Password" autoComplete="current-password" onChange={(e) => this.setState({pword: e.target.value})}/>
                        <input type="password" id="confirm_password" placeholder="Confirm Password"/>
                        <select id="class_year" onChange={(e) => this.setState({classyear: e.target.value})} />
                        <input type="submit" placeholder="Sign Up"/>
                    </form>
                </div>  
            </div>
        )
    }
}
export default RegistrationComponent;
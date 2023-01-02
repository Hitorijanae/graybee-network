import React from  'react' ;
import $ from  'jquery' ;
import "../css/tags.css" ;
import axios from  'axios' ;

let tags = {};

$( document ).on( "click", ".tag", function( e ) {

    selectTag( this );

    e.stopImmediatePropagation();

  } );
function selectTag( t ) {

    if ( !t.classList.contains( "selected" ) ) {
  
      tags[ t.id ] = 1;
  
      t.classList.toggle( "selected" );
  
    } else {
  
      delete tags[ t.id ];
  
      t.classList.toggle( "selected" );
  
    }
  
    console.log( tags );
    window.sessionStorage.setItem("tags", JSON.stringify(tags));
  
  }
class TagsComponent extends React.Component{

/*      Tagging Functions */

/**
 * @param {string} t Tag
 */

/**
 *
 */
sendTags() {
  tags=JSON.parse(window.sessionStorage.getItem("tags"));
  
  //tags.opcode = 1;
  console.log(tags);
  //const json = JSON.stringify( tags );
    /*fetch('php/tags.php', {
        method: 'POST',
        body: json
        }).then(function(response) {
            if(response.ok) {
                window.location.href="http://localhost:3000/feed.htm";
            }
        });*/
    const formdatum = new FormData();
    formdatum.append("opcode", 1);
    formdatum.append("json", JSON.stringify(tags));
    return(axios.post('http://localhost/tags.php', formdatum, {
      headers: {  'Content-Type': 'multipart/form-data', },
      withCredentials: true,
    })
    
  )}

  loadFeed = async(e) =>{
    e.preventDefault();
    let response = await this.sendTags();
    if(response.data === 1){
        window.location.href = "http://localhost:3000/feed.htm";
    }
  }

    render(){
        return(
            <div id="tags">
                <div className="tagHeader">
                    <div id="done" onClick={this.loadFeed}>Done</div>
                </div>
                <div className="tags"></div>
                
                </div>
                
        )
    }
    componentDidMount(){
      let formdatum = new FormData();
      formdatum.append("opcode", 0);
      fetch('http://localhost/tags.php', {
          method: 'POST',
          body: formdatum,
        }).then(response => response.json()).then(data =>{
          const greeting = document.createElement( "h1" );
          document.querySelector( ".tags" ).appendChild(greeting);

          for(let i = 0; i < data.length; i++){
            /*const appendix = "<option value='" + data[i] + "'>" + data[i] + "</option>";
            "<div class='tag' id='" +data[i] +"'>'" .$row['desc']. "</div>";
            document.getElementById("class_year").innerHTML += appendix;*/
            const tags = document.createElement( "div" );
            
            greeting.innerHTML = "Choose What You're Interested In!";
            tags.classList.add( "tag" );
            tags.id = data[i][1];
            tags.innerHTML = data[i][2];
            
            document.querySelector( ".tags" ).appendChild( tags );


          }
    });
    $(".navbar").css("display", "none");
    $("#done").css({"float": "right", "margin-right": "10px", "margin-top": "10px", "color": "black", "font-size": "20px", "cursor": "pointer", "border":"2px solid black", "border-radius": "5px", "padding": "5px"});
    $("#done").hover(function(){
      $(this).css({"background-color": "black", "color": "white"});
    }, function(){
      $(this).css({"background-color": "#dcdcdc", "color": "black"});
    });
      
    }
}
export default TagsComponent;
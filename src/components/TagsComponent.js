import React from  'react' ;
import $ from  'jquery' ;
import "../css/tags.css" ;

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

  const json = JSON.stringify( tags );
    fetch('php/tags.php', {
        method: 'POST',
        body: json
        }).then(function(response) {
            if(response.ok) {
                window.location.href="http://localhost:3000/feed.htm";
            }
        });
    }

    render(){
        return(
            <div id="tags">
                <div className="tagHeader">
                    <div id="done" onClick={this.sendTags}>Done</div>
                </div>
                <div className="tags"></div>
                
                </div>
                
        )
    }
    componentDidMount(){
      let formdatum = new FormData();
      formdatum.append("opcode", 0);
      fetch('http://localhost/php/tags.php', {
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
    }
}
export default TagsComponent;
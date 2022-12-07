"use strict";
class PostDialogComponent extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      uname: localStorage.getItem( "uname" ),
      filepath: localStorage.getItem( "filepath" ),
      visible: false
    };

  }

  render() {

    return (
      <div id="postDialog" className={this.state.visible ? "fadeOut" : "fadeIn"}>
        <div id="postDialogHeader">
            <button id="closePostDialog">X</button>
            <h1>What Did You Want to Post?</h1>

        </div>
        <div id="postDialogBody">
            <form id="postForm">
                <textarea
                    id="postText"
                    name="postText"
                    placeholder="What's on your mind?"
                    rows="10">
                </textarea>
                <canvas
                    id="pictureCanvas"
                    width="50px"
                    height="50px">
                </canvas>
                <input
                    type="file"
                    title="postImage"
                    id="postImage"
                    name="postImage"
                    accept="image/*"/>

                <input
                    type="submit"
                    id="postSubmit"
                    value="Post"/>
            </form>
        </div>
        <div id="userinfo">
            <canvas
                id="pfpCanvas"
                width="50px"
                height="50px">
                <img
                    src={this.state.filepath}
                    alt={this.state.uname}
                    id="postPFP"/>
            </canvas>
            <p>Posting As: <a id="userProfile" href=" profile_link">{this.state.uname}</a></p>
        </div>
    </div>
    );

  }

  componentDidMount() {

    const canvas = document.getElementById( "pfpCanvas" ); // Get the canvas

    const ctx = canvas.getContext( "2d" );

    const image = new Image();

    image.src = this.state.filepath;

    image.onload = function() {

      console.log( "height: " + image.height + "width: " + image.width );

      ctx.width = $( "#postDialogBody" ).width * 0.02; // Set the canvas to half the size of the image

      ctx.height = image.height * 0.02; // Set the canvas to half the size of the image

      ctx.drawImage( image, 0, 0, 50, 50 ); // Draw the image to the canvas

    };

  }

}

export { PostDialogComponent };

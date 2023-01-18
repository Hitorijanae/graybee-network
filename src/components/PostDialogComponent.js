import {Button, IconButton, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Avatar, Slide, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send'
import React from "react";
import $ from 'jquery';
class PostDialogComponent extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      uname: localStorage.getItem( "uname" ),
      avatarURL: "http://localhost/uploads/" + sessionStorage.getItem("avatar")
      
    };
    this.handlePost.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }
  handleClose(){
    this.props.setter({action:""});
  }
  
  handlePost = () => {
    sessionStorage.setItem("postText", document.getElementById("postText").value);
  }
  render(){
    
    
      
      return(
        <Dialog 
        open={this.props.visible} 

        TransitionComponent={Slide}
        >
          <DialogContent>
            <DialogTitle id="postDialogHeader" sx={
              {
                position: "relative",
                
              }
            }>
              Post
              <IconButton aria-label="close" id="closePostDialog" onClick={this.handleClose} sx={
                {
                  top: 8,
                  right: 8,
                  position: "absolute"
                }
              }
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContentText>
              
              </DialogContentText>
              <TextField
                autoCapitalize="true"
                autoFocus
                id="postText"
                label="What did you want to say?"
                margin="dense"
                multiline
                />
          </DialogContent>
          <DialogActions>
            <Avatar src={this.state.avatarURL} sx={
              {
                position:"absolute",
                left:8,
                bottom:8
              }
            }/>
            <Button variant="contained" endIcon={<SendIcon />} onClick={this.handlePost}>Post</Button>
          </DialogActions>
        </Dialog>
      )
  }

  /*render() {

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

  }*/

}

export default PostDialogComponent;

import React from 'react';
import $ from 'jquery';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Slide, Avatar} from '@mui/material';

class PostDialogComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "visible":false,
            "text":"",
            "destination":"",
            uname: localStorage.getItem( "uname" ),
            avatarURL: "http://localhost/uploads/" + sessionStorage.getItem("avatar")
        }
    }
    handleClose = () => {
        this.props.setter({action:""});
    }
    handleSend = () => {
        this.setState({text:document.getElementById("text").value});    
    }
    render(){
        return(
            <Dialog open={this.props.visible} TransitionComponent={Slide} onClose={this.props.handleClose}>
                <DialogTitle sx={{position:"relative"}}>Send a message!</DialogTitle>
                <DialogContent>
                    <TextField id="destination" label="Destination" variant="outlined" fullWidth />
                    <TextField id="text" label="Message" variant="outlined" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Avatar src={this.state.avatarURL} sx={{position:"absolute", left:8, bottom:8}} />
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.handleSend}>Send</Button>
                </DialogActions>
            </Dialog>
        );
    }
}
export default PostDialogComponent;
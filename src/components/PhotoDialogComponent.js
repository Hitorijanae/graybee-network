import {Button, IconButton, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Avatar, Slide, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Send'
import React from "react";
import $ from 'jquery';
class PhotoDialogComponent extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {
        uname: localStorage.getItem( "uname" ),
        avatarURL: "http://localhost/uploads/" + sessionStorage.getItem("avatar"),
        hasInput: false,
        photos: []
        
        };
        this.handleClose.bind(this);
        this.handleFileChange.bind(this);
    }
    handleClose = () => {
        this.props.setter({action: ""});
    }
    handleFileChange = (input) => {
        if(input.target.files){
            for(let i = 0; i < input.target.files.length; i++){
                this.state.photos.push(input.target.files[i]);
            }
            this.setState({hasInput: true});
        }

    }
    render(){
        if(!this.state.hasInput){
            return(
                <Dialog
                open={this.props.visible}
                TransitionComponent={Slide}
                onClose={this.handleClose}>
                    <DialogTitle>Upload a pic or two!
                        <IconButton aria-label="close" id="closePostDialog" onClick={this.handleClose} sx={
                            {
                                top: 8,
                                right: 8,
                                position: "absolute"
                            }
                        }>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <input type="file" name="file" id="file" onChange={this.handleFileChange} multiple="multiple" />
                    </DialogContent>
                    <DialogActions>
                        <Avatar src={this.state.avatarURL}/>
                        <Button variant="contained" startIcon={<UploadIcon />} onClick={this.handleSubmit} sx={
                            {
                                right:8,
                                position:"absolute"
                            }
                        }>Upload!
                        </Button>
                    </DialogActions>


                    
                </Dialog>
            )
        }
        else{
            return(
                <Dialog
                open={this.props.visible}
                TransitionComponent={Slide}
                onClose={this.handleClose}>
                    <DialogTitle>Upload a pic or two!
                        <IconButton aria-label="close" id="closePostDialog" onClick={this.handleClose} sx={
                            {
                                position: "absolute",
                                top: 8,
                                right: 8
                            }
                        }>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <img src={URL.createObjectURL(this.state.photos[0])} alt="Preview" />
                        <input type="file" name="file" id="file" onChange={this.handleFileChange} multiple="multiple"/>
                    </DialogContent>
                    <DialogActions>
                        <Avatar src={this.state.avatarURL} /*sx={
                            {
                                position:"absolute",
                                bottom:8,
                                left:8
                            }
                        }*//>
                        <Button variant="contained" startIcon={<UploadIcon />} onClick={this.handleSubmit} sx={
                            {
                                position:"absolute",
                                bottom:8,
                                right:8
                            }
                        }>Upload!
                        </Button>
                    </DialogActions>
                </Dialog>
            )
        }
    }
}
export default PhotoDialogComponent;
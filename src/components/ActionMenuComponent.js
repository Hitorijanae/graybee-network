import React from "react";
import $ from 'jquery';
import "../css/actionMenu.css";
import PostDialogComponent from "./PostDialogComponent";
import { ButtonGroup, Fab, Slide} from "@mui/material";
import UpwardArrowIcon from "@mui/icons-material/ArrowUpward";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import AddIcon from "@mui/icons-material/Add";
import Message from "@mui/icons-material/Message";
import PhotoDialogComponent from "./PhotoDialogComponent";
import MessageComponent from "./MessageComponent";
class ActionMenuComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "expanded":false,
            "action":"",
        }
        this.setAction.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }
    setAction = (newAction) => {
        this.setState({action: newAction});
        console.log("Action set to " + newAction);
    }
    toggleMenu(){
        this.setState({expanded: !this.state.expanded});
    }
    
    render(){
        let sx = {
            position: "fixed",
            bottom:8,
            right:8
        }
        if(this.state.expanded){
            
            
            if(this.state.action === "text"){
                return(
                    <ButtonGroup orientation="vertical" sx={sx}>

                        <Fab color="primary" aria-label="message" id="message">
                            <MessageComponent visible={false} setter={this.setAction} />
                            <Message />
                        </Fab>
                    
                        <Fab color="primary" aria-label="photo" id="photo">
                            <PhotoDialogComponent visible={false} setter={this.setAction} />
                            <AddAPhoto />
                        </Fab>

                        <Fab color="primary" aria-label="post" id="post">
                            <PostDialogComponent visible={true} setter={this.setAction} />
                            <UpwardArrowIcon />
                        </Fab>

                        <Fab color="primary" aria-label="add" id="add" onClick={this.toggleMenu}>
                            <AddIcon />
                        </Fab>

                </ButtonGroup>
                );
            }
            else if(this.state.action === "photo"){
                return(
                    <ButtonGroup orientation="vertical" sx={sx}>

                        <Fab color="primary" aria-label="message" id="message">
                            <MessageComponent visible={false} setter={this.setAction} />
                            <Message />
                        </Fab>


                        <Fab color="primary" aria-label="photo" id="photo">
                            <PhotoDialogComponent visible={true} setter={this.setAction} />
                            <AddAPhoto />
                        </Fab>

                        <Fab color="primary" aria-label="post" id="post">
                            <PostDialogComponent visible={false} setter={this.setAction} />
                            <UpwardArrowIcon />
                        </Fab>

                        <Fab color="primary" aria-label="add" id="add" onClick={this.toggleMenu}>
                            <AddIcon />
                        </Fab>

                    </ButtonGroup>
                );
            }
            else if(this.state.action === "message"){
                return(
                    <ButtonGroup orientation="vertical" sx={sx}>

                        <Fab color="primary" aria-label="message" id="message">
                            <MessageComponent visible={true} setter={this.setAction} />
                            <Message />
                        </Fab>

                        <Fab color="primary" aria-label="photo" id="photo">
                            <PhotoDialogComponent visible={false} setter={this.setAction} />
                            <AddAPhoto />
                        </Fab>

                        <Fab color="primary" aria-label="post" id="post">
                            <PostDialogComponent visible={false} setter={this.setAction} />
                            <UpwardArrowIcon />
                        </Fab>

                        <Fab color="primary" aria-label="add" id="add" onClick={this.toggleMenu}>
                            <AddIcon />
                        </Fab>
                        
                    </ButtonGroup>
                );
            }
                        
            else{
                return(
                    <ButtonGroup orientation="vertical" sx={sx}>

                        <Fab color="primary" aria-label="message" id="message" onClick={() => this.setAction("message")}>
                            <MessageComponent visible={false} setter={this.setAction} />
                            <Message />
                        </Fab>

                        <Fab color="primary" aria-label="photo" id="photo" onClick={() => this.setAction("photo")}>
                            <PhotoDialogComponent visible={false} setter={this.setAction} />
                            <AddAPhoto />
                        </Fab>

                        <Fab color="primary" aria-label="post" id="post" onClick={() => this.setAction("text")}>
                            <PostDialogComponent visible={false} setter={this.setAction} />
                            <UpwardArrowIcon />
                        </Fab>

                        <Fab color="primary" aria-label="add" id="add" onClick={this.toggleMenu}>
                            <AddIcon />
                        </Fab>

                    </ButtonGroup>
                )
            }
        }
        else{
            return(
                <Fab color="primary" aria-label="add" id="add" onClick={this.toggleMenu} sx={sx}>
                    <AddIcon />
                </Fab>
            )
        }
    }
    /*render(){
        return(
            <div>
                <div className="actionMenu">
                    <div className="actionMenu__item" onClick={new PostDialogComponent()}>
                        <img src="assets/icons/post.png" alt="textpost" />
                    </div>
                    <div className="actionMenu__item">
                        <img src="assets/icons/photo.png" alt="photopost" />
                    </div>
                    <div className="actionMenu__item">
                        <img src="assets/icons/video.png" alt="videopost" />
                    </div>
                    <div className="actionMenu__item">
                        <img src="assets/icons/file.png" alt="filepost" />
                    </div>
                    <div className="actionMenu__item">
                        <img src="assets/icons/poll.png" alt="pollpost" />
                    </div>
                    <div className="actionMenu__item">
                        <img src="assets/icons/quote.png" alt="quotepost" />
                    </div>
                    <div className="actionMenu__item">
                        <img src="assets/icons/link.png" alt="linkpost" />
                    </div>
                </div>
            </div>
        )
    }*/
}
export default ActionMenuComponent;
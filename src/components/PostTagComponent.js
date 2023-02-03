import React from 'react';
import $ from 'jquery';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Slide, Avatar} from '@mui/material';
import axios from 'axios';
let tags = [];
let parsedTags = [];
class PostTagComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            tags: [],
        }
        this.getTags.bind(this);
        this.parseTags.bind(this);
    }
    getTags = () => {
        const formdatum=new FormData();
        formdatum.append("opcode", 0);
        axios.post("http://localhost/tags.php", {
            headers: {  'Content-Type': 'multipart/form-data' },
            withcredentials: true}).then(response => {
                //console.log(response.data);
                //console.log(tags);
                //console.log(this.state.tags);
                tags = response.data;
                //console.log(tags);
                this.parseTags();


                

            });

        /*for(let i=0; i<this.state.tags.length; i++){
            this.setState({newTags: [...this.state.newTags, this.state.tags[i][0]]});
            console.log(this.state.tags[i][0]);
            console.log(this.state.newTags);
        }*/
    }
    parseTags = () => {
        for(let i=0; i<tags.length; i++){
            //parsedTags[tags[i][0]] = tags[i][1];
            parsedTags.push({id: tags[i][0], tag: tags[i][2]});
        }
        //console.log(parsedTags);
        this.setState({tags: this.state.tags.concat(parsedTags)});
        console.log(this.state.tags);
    }
    render(){
        //console.log(this.state.tags);
        if(this.state.tags.length == 0){
            this.getTags();
            console.log(this.state.tags);
        }
        return(
            <div>
                {this.state.tags.map((tags) => (
                    <div className="tag" key={tags.id}> {tags.tag} </div>
                ))}
            </div>


        );
    }
    /*componentDidMount(){
        this.setState({tags: tags});
        console.log(tags);
        console.log(this.state.tags);
    }*/
}
export default PostTagComponent;
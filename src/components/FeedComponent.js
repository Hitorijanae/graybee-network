import React from "react";
import $ from 'jquery';
import axios from 'axios';
import ActionMenuComponent from "./ActionMenuComponent";
import PostComponent from "./PostComponent";

class FeedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
        this.loadPosts.bind(this);
    }
    loadPosts(){
        const formDatum = new FormData();
        formDatum.append("opcode", 0);
        return(axios.post('http://localhost/post.php', formDatum, {
            headers: {
                'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
                })
                .then((response) => {
                    //console.log(response.data[0]);
                    //console.log(response.data[0].textContent);
                    for(let i = 0; i < response.data.length; i++){
                        this.state.posts.push(response.data[i]);
                    }
                    //console.log(this.state.posts);
                    //console.log(JSON.parse(response.data[0]));
                    console.log(this.state.posts.map((post, index) => {
                        console.log(post);
                        console.log(index);
                    }));
                }));

    }
    componentDidMount(){
        this.loadPosts();

    }
    render(){
        return(
            <div id="feed">
                {this.state.posts.map((post, index) => {
                    return(
                        <PostComponent key={index} title={post.title} content={post.textContent} username={post.username} avatarUrl={post.avatarUrl} />
                    );
                })}
                <ActionMenuComponent />
            </div>
            
        );
    };
}

export default FeedComponent;
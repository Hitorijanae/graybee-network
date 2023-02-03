import React from 'react';
import ReactDOM from 'react-dom/client';
import "../css/post.css";
import Card from '@mui/material/Card';
import { CardActionArea, CardHeader, CardContent} from '@mui/material';
import axios from 'axios';
class PostComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "visible":false,
            "loaded":false,
        }
    }

    render(){
        return(
            <Card className="post" variant='outlined' >
                <CardHeader title={this.props.title} subheader={this.props.username} avatar={<img src={this.props.avatarUrl} alt="posterAvatar"/>} />
                <CardContent>{this.props.content}</CardContent>
                <CardActionArea>
                    
                </CardActionArea>
            </Card>
        );
    }
}

export default PostComponent;
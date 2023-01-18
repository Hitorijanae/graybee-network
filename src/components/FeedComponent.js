import React from "react";
import $ from 'jquery';

import ActionMenuComponent from "./ActionMenuComponent";

class FeedComponent extends React.Component {
    render(){
        return(
            <div>  
                <ActionMenuComponent sx={
                    {
                        position: "relative",
                        bottom:8
                    }
                }/>
            </div>

        )
    }
}
export default FeedComponent;
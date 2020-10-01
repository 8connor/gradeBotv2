import React from "react";

function Body(props){
    return(
        <div className="bodyCon">
            {props.children}
        </div>
    )
}

export default Body
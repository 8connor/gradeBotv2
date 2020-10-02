import React from "react";

function Body(props){
    return( 
        // This is the wrapping div so that we can easily format everything rendered inside of this div.
        <div className="bodyCon">
            {props.children}
        </div>
    )
}

export default Body
import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '2px solid #0ccac4', height:'600px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
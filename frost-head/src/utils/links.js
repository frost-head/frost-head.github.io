import React from "react";

function Links(props){
    return (<a href={props.link} className='px-4 py-2 hover:bg-white hover:text-black transition-all duration-150 cursor-pointer '>
        {props.text}
    </a>);
}

export default Links;
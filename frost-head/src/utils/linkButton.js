import React from "react";
function LinkButton(props){
    return (
        <a href={props.link} className="text-3xl px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 hover:-rotate-6 font-bold uppercase">{props.text}</a>

    );

}

export default LinkButton
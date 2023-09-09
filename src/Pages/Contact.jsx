import React from "react";

export function Contact({theme}){
    return(
        <div className={theme?"contactlight":"contact"}>For more info regarding D3.js please
            <a href="https://d3js.org/" target="onBlank_"> CLICK HERE :-)</a>
        </div>
    )
}
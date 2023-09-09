import React from "react";
import { Plotcomponent } from "./Plotcomponent";

export function Plotswindow({gettingY,x,y,theme,plotData}){
    return(
        <div className={theme?"plotswindowlight":"plotswindow"}>
            <div className={theme?"plot_filterlight":"plot_filter"}>
                <ul onClick={(e)=>gettingY(e.target.innerText)}>
                    <li>Intensity</li>
                    <li>Likelihood</li>
                    <li>Relevance</li>
                </ul>
            </div>
            <div>
                <Plotcomponent x={x} y={y} plotData={plotData} theme={theme}/>
            </div>
        </div>
    )
}
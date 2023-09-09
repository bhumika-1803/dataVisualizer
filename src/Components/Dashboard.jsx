import React from "react";

export function Dashboard({gettingX,theme}){
    return(
        <div className={theme?"dashboardlight":"dashboard"}>
            <div className="dash">DASHBOARD</div>
            <div onClick={(e)=>gettingX(e.target.innerText)}>
                <ul className={theme?"ul_listlight":"ul_list"}>
                    <li>Sector</li>
                    <li>Topic</li>
                    <li>Country</li>
                    <li>Region</li>
                    <li>End_Year</li>
                    <li>Start_Year</li>
                    <li>Pestle</li>
                    <li>Source</li>
                </ul>
            </div>
        </div>
    )
}
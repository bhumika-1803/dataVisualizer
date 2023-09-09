import React from "react";

export function About({theme}){
    return(
        <div className={theme?"aboutlight":"about"}>This is a data visualization dashboard. It is made woth the help of MERN stack i.e. MongoDB, Express.js, React.js and Node.js and D3.js is used for plotting various graphs. The data is stored in MongoDB and with the help of server it is fetched from database and then on the basis of selection of element various plots are plotted using D3.js</div>
    )
}
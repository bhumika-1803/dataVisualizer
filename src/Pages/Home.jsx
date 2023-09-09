import React from "react";
import { Dashboard } from "../Components/Dashboard";
import { Plotswindow } from "../Components/Plotswindow";
import { Route, Routes } from "react-router-dom";
// import axios from "axios"
const data = require("../Backend/database/jsondata.json");


export function Home({theme}){
    const [x,setX]=React.useState("Sector")
    const [y,setY]=React.useState("Intensity")
    const [plotData,setPlotData]=React.useState([])

    function gettingX(valX){
        setX(valX)
        setY("Intensity")
    }
    function gettingY(valY){
        setY(valY)
    }

    const getFetchData = async () => {
        const response = await fetch("http://localhost:8080")
        const data = await response.json()
        setPlotData(data)
        return data    
        // return JSON.parse(data)
      }
    const postData=async (d)=>{
        let options={
            method: "POST",
            body:JSON.stringify(d),
            headers:{
                "Content-Type":"application/json"
            },
        }
        await fetch("http://localhost:8080/",options)
    }
    React.useEffect(()=>{
        postData(data)
        getFetchData()
        // console.log("****",plotData)
    },[])

    return(
        <div className="main">
            <Dashboard gettingX={gettingX} theme={theme}/>
            <Plotswindow gettingY={gettingY} x={x} y={y} theme={theme} plotData={plotData} />
            {/* <Routes>
                <Route />
            </Routes> */}
        </div>
    )
}
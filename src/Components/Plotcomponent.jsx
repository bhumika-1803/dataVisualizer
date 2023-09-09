import React from "react";
import Bar from "./Plots/Bar";
import Pie from "./Plots/Pie";
import Disc from "./Plots/Disc";
import Line from "./Plots/Line";

export function Plotcomponent({x,y,plotData,theme}){
    const [data,setData]=React.useState(plotData)
    const [filterData,setFilterData]=React.useState(plotData)

    function getFilteredData(x,y,data){
        let newData=data.filter(el => el[x] && el[y])
        setFilterData(newData)
    }

    React.useEffect(()=>{
        setData(plotData)
    },[plotData])
    React.useEffect(()=>{
        getFilteredData(x,y,data)
    },[x,y,data])

    return(
        <div className="Plotcomponent">
            <div className={theme?"plottext":"plottextlight"}>{x} VS {y}</div>
            <div>
            <div id="d3-bar-container">
                <Bar filterData={filterData} xo={x} yo={y} theme={theme}/>
            </div>
            <br></br>
            <div id="d3-pie-container">
                <Pie filterData={filterData} xo={x} yo={y} theme={theme}/>
            </div>
            <br></br>
            <div id="d3-line-container">
                <Line filterData={filterData} xo={x} yo={y} theme={theme}/>
            </div>
            <br></br>
            <div id="d3-disc-container">
                <Disc filterData={filterData} xo={x} yo={y} theme={theme}/>
            </div>
            <br></br>
            </div>
        </div>
    )
}
















// import React from "react";
// import Bar from "./Plots/Bar";
// import Pie from "./Plots/Pie";

// export function Plotcomponent({x,y,plotData,theme}){
//     const [data,setData]=React.useState(plotData)
//     const [filterData,setFilterData]=React.useState(plotData)

//     function getFilteredData(x,y,data){
//         let newData=data.filter(el => el[x] && el[y])
//         setFilterData(newData)
//     }

//     React.useEffect(()=>{
//         setData(plotData)
//     },[plotData])
//     React.useEffect(()=>{
//         getFilteredData(x,y,data)
//     },[x,y,data])

//     return(
//         <div className="Plotcomponent">
//             <div id="d3-bar-container">
//                 <Bar filterData={filterData} xo={x} yo={y} theme={theme}/>
//             </div>
//             <div>
//                 <Pie/>
//             </div>
//         </div>
//     )
// }

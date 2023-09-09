import * as d3 from "d3";
export default function Line({filterData,xo,yo,theme}){
    
let data=convertToDataset([],filterData,xo,yo)
const margin = { top: 50, bottom: 50, left: 50, right: 50 };
const width = 1000 - margin.left - margin.right;
const height = 550 - margin.top - margin.bottom;

const x = d3.scaleLinear()
  .range([0, width]);

const y = d3.scaleLinear()
  .range([height, 0]);

d3.select("#d3-line-container").selectAll("svg").remove()
var svg = d3.select("#d3-line-container")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

x.domain([0,data.length-1])
y.domain([0, d3.max(data, d => d.y_label)+1])
// y.domain([0,25]);

svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x)
    .tickFormat(i => data[i]?.x_label))
    .selectAll("text") 
    // .attr("x",width/100)
    .attr("y",margin.bottom+10)
    .attr("text-anchor","start")
    .attr("transform", "rotate(-90)")
    .attr("font-size", '18px')

svg.append("g")
  .call(d3.axisLeft(y))
  .selectAll("text")
  .attr("font-size", '18px')

const line = d3.line()
  .x(d=>x(d.index))
  .y(d => y(d.y_label));

svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 3)
  .attr("d", line);
}

  function convertToDataset(data,array,x,y) {
    console.log(data,array,x,y)
    let i=1
    array?.forEach(function (obj) {
        let o={}
        data.push({
            index:i,
            x_label:obj[x],
            y_label:Number(obj[y])
        })
        i++
    });
    console.log("data",data)
    return data
  }
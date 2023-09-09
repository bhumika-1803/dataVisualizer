import * as d3 from "d3";
export default function Pie({filterData,xo,yo,theme}){
        // Specify the chart’s dimensions.
        let data=convertToDataset([],filterData,xo,yo)
        const width = 928;
        const height = Math.min(width, 500);
      
        // Create the color scale.
        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.x_label))
            .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.3), data.length).reverse())
      
        // Create the pie layout and arc generator.
        const pie = d3.pie()
            .sort(null)
            .value(d => d.y_label);
      
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(Math.min(width, height) / 2 - 1);
      
        const labelRadius = arc.outerRadius()() * 0.8;
      
        // A separate arc generator for labels.
        const arcLabel = d3.arc()
            .innerRadius(labelRadius)
            .outerRadius(labelRadius);
      
        const arcs = pie(data);
      
        // Create the SVG container.
        // const svg = d3.create("svg")
        d3.select("#d3-pie-container").selectAll("svg").remove()
        const svg = d3.select('#d3-pie-container')
          .append('svg')
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
      
        // Add a sector path for each y_label.
        svg.append("g")
            .attr("stroke", "white")
          .selectAll()
          .data(arcs)
          .join("path")
            .attr("fill", d => color(d.data.x_label))
            .attr("d", arc)
          .append("title")
            .text(d => `${d.data.x_label}: ${d.data.y_label.toLocaleString("en-US")}`);
      
        // Create a new arc generator to place a label close to the edge.
        // The label shows the y_label if there is enough room.
        svg.append("g")
            .attr("text-anchor", "middle")
          .selectAll()
          .data(arcs)
          .join("text")
            .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
            .call(text => text.append("tspan")
                .attr("y", "-0.4em")
                .attr("font-weight", "bold")
                .text(d => d.data.x_label))
            .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
                .attr("x", 0)
                .attr("y", "0.7em")
                .attr("fill-opacity", 0.7)
                .text(d => d.data.y_label.toLocaleString("en-US")));
      
        svg.node();
}

function convertToDataset(data,array,x,y) {
    console.log(data,array,x,y)
    array?.forEach(function (obj) {
        let o={}
        data.push({
            x_label:obj[x],
            y_label:Number(obj[y])
        })
    });
    console.log("data",data)
    return data
  }
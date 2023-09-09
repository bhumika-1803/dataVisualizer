import * as d3 from "d3";
export default function Bar({filterData,xo,yo,theme})
{
  let data=convertToDataset([],filterData,xo,yo)
  const width = 1200;
  const height = 550;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  
  d3.select("#d3-bar-container").selectAll("svg").remove()
  const svg = d3.select('#d3-bar-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 25])
    .range([height - margin.bottom, margin.top])

   var color="royalblue"
   if(theme) color="pink"

  svg
    .append("g")
    .attr("fill",color)
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.y_label, b.y_label)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.y_label))
      .attr('title', (d) => d.y_label)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.y_label))
      .attr("width", x.bandwidth());
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", '20px')
  }
  
  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].x_label))
      .selectAll("text") 
      .attr("transform", "rotate(-10)")
      .attr("font-size", '18px')
  }

  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
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





















// import * as d3 from "d3";
// export default function Bar({filterData,xo,yo,theme})
// {
//   // let data=convertToDataset([],filterData,xo,yo)
//   const width = 1200;
//   const height = 550;
//   const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  
//   d3.select("#d3-bar-container").selectAll("svg").remove()
//   const svg = d3.select('#d3-bar-container')
//     .append('svg')
//     .attr('width', width - margin.left - margin.right)
//     .attr('height', height - margin.top - margin.bottom)
//     .attr("viewBox", [0, 0, width, height]);
  
//   const x = d3.scaleBand()
//     .domain(d3.range(data.length))
//     .range([margin.left, width - margin.right])
//     .padding(0.1)
  
//   const y = d3.scaleLinear()
//     .domain([0, 25])
//     .range([height - margin.bottom, margin.top])

//    var color="royalblue"
//    if(theme) color="pink"

//   svg
//     .append("g")
//     .attr("fill",color)
//     .selectAll("rect")
//     .data(data.sort((a, b) => d3.descending(a.y_label, b.y_label)))
//     .join("rect")
//       .attr("x", (d, i) => x(i))
//       .attr("y", d => y(d.y_label))
//       .attr('title', (d) => d.y_label)
//       .attr("class", "rect")
//       .attr("height", d => y(0) - y(d.y_label))
//       .attr("width", x.bandwidth());
  
//   function yAxis(g) {
//     g.attr("transform", `translate(${margin.left}, 0)`)
//       .call(d3.axisLeft(y).ticks(null, data.format))
//       .attr("font-size", '20px')
//   }
  
//   function xAxis(g) {
//     g.attr("transform", `translate(0,${height - margin.bottom})`)
//       .call(d3.axisBottom(x).tickFormat(i => data[i].x_label))
//       .selectAll("text") 
//       .attr("transform", "rotate(-10)")
//       .attr("font-size", '18px')
//   }

//   svg.append("g").call(xAxis);
//   svg.append("g").call(yAxis);
//   svg.node();
// }

// // function convertToDataset(data,array,x,y) {
// //   console.log(data,array,x,y)
// //   array?.forEach(function (obj) {
// //       let o={}
// //       data.push({
// //           x_label:obj[x],
// //           y_label:Number(obj[y])
// //       })
// //   });
// //   console.log("data",data)
// //   return data
// // }
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function D3Chart() {
    const svgRef = useRef(null);

    const transactionDataset = [
        { date: "2020-12-12", amount: 7.3001 },
        { date: "2020-12-13", amount: -0.3082 },
        { date: "2020-12-19", amount: -1.9919 },
        { date: "2020-12-25", amount: 5.0000 }
    ];

    // Calculate cumulative amounts in a separate step
    let cumulativeAmount = 0;
    const dataset = transactionDataset.map(transaction => {
      cumulativeAmount = Math.max(cumulativeAmount + transaction.amount, 0);
      return { ...transaction, cumulativeAmount };
    });
  
    useEffect(() => {
    //margins 
    const margin = { top: 20, right: 20, bottom: 50, left: 40};
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    
    const parseDate = d3.timeParse("%Y-%m-%d");
    dataset.forEach(d => {
        d.date = parseDate(d.date);
    });
    //console.log(dataset);

    const xScale = d3.scaleTime()
        .domain(d3.extent(dataset, d=> d.date))
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, d => d.cumulativeAmount)])
        .range([height, 0]);

    const svg = d3.select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Create line path for the cumulative amounts
    const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.cumulativeAmount));
    
    svg.append("path")
      .datum(dataset)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Create circles for data points
    svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.date))
      .attr("cy", d => yScale(d.cumulativeAmount))
      .attr("r", 4)
      .attr("fill", "steelblue");

    //creates axis 
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y-%m-%d"));
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text") //x label vertical transformation
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
        .call(yAxis);
    // Append line path to the SVG

  }, []);
    return (
        <svg ref={svgRef}></svg>
    );
}; 
export default D3Chart;

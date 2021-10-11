import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

/**
 * A shared component to display a graph when a dataset is passed to it, 
 * 
 * 
 * @param {Object} graphData 
 */
export default function Graph({ graphData }) {
  const { innerWidth: width } = window; // get window's width to set the graph width 
  const { data, xDataKey, yDataKey } = graphData; // de-structure the GraphData 
  return (
    <BarChart
      width={width - width * 0.2} // Bar-graph should be always 20% less of wide of windows width 
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xDataKey} />
      <YAxis />
      <Tooltip />
      <Bar data-testId='xAxis' dataKey={yDataKey} fill="#8884d8" />
    </BarChart>
  );
}

Graph.protoTypes = {
  graphData: PropTypes.shape({
    data: PropTypes.array.isRequired,
    xDataKey: PropTypes.string.isRequired,
    yDataKey: PropTypes.string.isRequired,
  }),
};

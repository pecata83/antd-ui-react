import React from "react";
import Chart from "react-google-charts";
import { Icon } from "antd";

export default function Charts({ chart }) {
  return (
    <div
      style={{
        padding: `12px`,
        marginBottom: `24px`,
        overflow: `hidden`
      }}
    >
      <Chart
        height={300}
        chartType={chart.type}
        loader={loader()}
        data={chart.data}
        options={chart.options}
        legendToggle
      />
    </div>
  );
}

const loader = function ChartLoadingOverlay() {
  return (
    <div
      style={{
        minHeight: `300px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
      }}
    >
      <Icon type="pie-chart" theme="twoTone" style={{ fontSize: "48px" }} />
    </div>
  );
};

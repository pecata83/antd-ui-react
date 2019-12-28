import React from "react";
import { Layout, Row, Col } from "antd";
import Checkboxes from "../components/Checkboxes";
import PickerSizes from "../components/PickerSizes";
import Charts from "../components/Charts";
import Form from "../components/Form";
import Map from "../components/Map";
import GradientSlider from "../components/GradientSlider";

const usCitiesChartData = {
  type: "ColumnChart",
  options: {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "60%" },
    hAxis: {
      title: "Total Population",
      minValue: 0
    },
    colors: ["#1890ff", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"]
  },
  data: [
    ["City", "2010", "2000"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
    ["Philadelphia, PA", 1526000, 1517000]
  ]
};

export default function Dashboard({ theme }) {
  return (
    <Layout theme={theme} style={{ padding: 24 }}>
      <Layout.Content>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Charts chart={usCitiesChartData} />
            <Form />
          </Col>

          <Col span={12}>
            <Map></Map>
            <GradientSlider></GradientSlider>
            <PickerSizes></PickerSizes>
            <Checkboxes></Checkboxes>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

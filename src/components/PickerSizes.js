import React, { useState } from "react";
import { DatePicker, Radio } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default function PickerSizes() {
  const [size, setSize] = useState("default");

  const handleSizeChange = e => {
    setSize(e.target.value);
    console.log(size);
  };

  return (
    <div
      style={{
        padding: `12px`,
        marginBottom: `24px`
      }}
    >
      <h2>Date Pickers</h2>

      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <DatePicker size={size} />
      <br />
      <br />
      <MonthPicker size={size} placeholder="Select Month" />
      <br />
      <br />
      <RangePicker size={size} />
      <br />
      <br />
      <WeekPicker size={size} placeholder="Select Week" />
    </div>
  );
}

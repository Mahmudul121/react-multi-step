import React from "react";
import { Scatter } from "react-chartjs-2";

const ChartView = (props) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const data = {
    datasets: [
      {
        label: "KP value X,Y",
        data: props.data,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
  console.log(props.data);
  return <Scatter options={options} data={data} />;
};

export default ChartView;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Senior", "Mezzanine", "Junior"],
  datasets: [
    {
      label: "Principal",
      data: [100],
      backgroundColor: ["rgba(76, 145, 115, 1)"],
      borderColor: ["#fff"],
      borderWidth: 1,
    },
  ],
};

const Onetranchepiechart = () => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default Onetranchepiechart;

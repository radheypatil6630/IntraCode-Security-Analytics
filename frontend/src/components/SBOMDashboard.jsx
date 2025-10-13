import React from 'react'
import { useState } from "react";
import { Data } from "./utils/data";
import PieChart from "./PieChart";
import PolarChart from './PolarChart';
import LineGraph from './LineGraph';

const SBOMDashboard = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 '>
      <div className=' p-4 bg-blue-950 border rounded-xl border-gray-800 h-[420px] w-auto flex items-center justify-center'>
<PieChart chartData={chartData} />
      </div>
      <div className=' p-4 bg-blue-950 border rounded-xl border-gray-800 h-[420px] w-auto flex items-center justify-center'>
        <PolarChart chartData={chartData} />
      </div>
      <div className=' p-4 bg-blue-950 border rounded-xl border-gray-800 h-[420px] w-auto flex items-center justify-center'>
        <LineGraph chartData={chartData} />
      </div>
    </div>
  )
}

export default SBOMDashboard

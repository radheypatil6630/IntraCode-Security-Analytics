import React from 'react'
import 'chart.js/auto';
import { Line } from "react-chartjs-2";
const LineGraph = ({ chartData }) => {
    
  return (
    <div>
       <div className="chart-container">
      <h2 className='text-center text-white'>Line Graph</h2>
      <Line
        data={chartData}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Users Gained between 2016-2020",
                        color: '#ffffff',
                      
                    },
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    },
                    tooltip: {
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        footerColor: '#ffffff'
                    }
                }
            }}
      />
    </div>
    </div>
  )
}

export default LineGraph

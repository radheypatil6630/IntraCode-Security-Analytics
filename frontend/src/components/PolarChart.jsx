import React from 'react'
import 'chart.js/auto';
import { PolarArea } from "react-chartjs-2";
const PolarChart = ({ chartData }) => {
    
  return (
   
       <div className="chart-container">
      <h2 className='text-center text-white'>Polar Chart</h2>
      <PolarArea
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

  )
}

export default PolarChart

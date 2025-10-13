import React from 'react'
import 'chart.js/auto';
import { Pie } from "react-chartjs-2";
const PieChart = ({ chartData }) => {
    
return (
    <div className='h-full w-full '>
        <h2 className='text-center text-white'>Pie Chart</h2>
        <Pie
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

export default PieChart

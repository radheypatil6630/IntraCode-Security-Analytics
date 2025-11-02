import React from 'react'
import 'chart.js/auto';
import { Line } from "react-chartjs-2";
const LineChart = ({ chartData }) => {
    
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
    color: "#ffffff",
    font: {
      size: 20,
      weight: "bold",
      family: "Poppins, sans-serif"
    },
    padding: {
      top: 20,
      bottom: 20
    }
  },
  legend: {
    labels: {
      color: "#e0e7ff", // soft bluish white
      font: {
        size: 14,
        family: "Poppins, sans-serif"
      },
      padding: 15,
    },
  },
  tooltip: {
    backgroundColor: "rgba(30, 41, 59, 0.9)", // navy glass look
    titleColor: "#00eaff", // bright cyan
    bodyColor: "#ffffff",
    borderColor: "#00eaff",
    borderWidth: 1,
    cornerRadius: 8,
    titleFont: {
      size: 14,
      weight: "bold"
    },
    bodyFont: {
      size: 13
    },
    padding: 12,
    displayColors: true,
    boxPadding: 6,
    callbacks: {
      labelColor: function(context) {
        // Adds color indicator beside tooltip label
        return {
          borderColor: context.dataset.backgroundColor,
          backgroundColor: context.dataset.backgroundColor,
          borderWidth: 2,
          borderRadius: 2
        };
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year", // X-axis label
        color: "#00eaff",
        font: {
          size: 16,
          weight: "600",
          family: "Poppins, sans-serif"
        }
      },
      ticks: {
        color: "#ffffff"
      },
      grid: {
        color: "rgba(255,255,255,0.1)"
      }
    },
    y: {
      title: {
        display: true,
        text: "Users Gained", // Y-axis label
        color: "#00eaff",
        font: {
          size: 16,
          weight: "600",
          family: "Poppins, sans-serif"
        }
      },
      ticks: {
        color: "#ffffff"
      },
      grid: {
        color: "rgba(255,255,255,0.1)"
      }
    }
  }
}

            }}
      />
    </div>
    </div>
  )
}

export default LineChart

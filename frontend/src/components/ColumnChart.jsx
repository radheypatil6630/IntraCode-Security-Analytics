import React from 'react'
import 'chart.js/auto';
import { Bar  } from "react-chartjs-2";
const ColumnChart = ({ chartData }) => {
    
  return (
   
       <div className="chart-container">
      <h2 className='text-center text-white'>Column Chart</h2>
      <Bar 
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
      text: "Year",
      color: "#ffffff",
      font: {
        size: 16,
        weight: "600",
        family: "Poppins, sans-serif"
      }
    },
    ticks: {
      color: "#ffffff"  // color for tick labels (2016, 2017...)
    },
    grid: {
      color: "rgba(255,255,255,0.1)" // light gridlines
    },
    border: {
      color: "#ffffff" // 👈 sets the X-axis line color
    }
  },
  y: {
    title: {
      display: true,
      text: "Users Gained",
      color: "#ffffff",
      font: {
        size: 16,
        weight: "600",
        family: "Poppins, sans-serif"
      }
    },
    ticks: {
      color: "#ffffff"  // color for Y tick values (0, 20000...)
    },
    grid: {
      color: "rgba(255,255,255,0.1)"
    },
    border: {
      color: "#ffffff" // 👈 sets the Y-axis line color
    }
  }
}

}

            }}
      />
    </div>

  )
}

export default ColumnChart

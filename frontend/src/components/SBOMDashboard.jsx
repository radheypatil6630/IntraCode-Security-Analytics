// import React from 'react'
// import { useState } from "react";
// import { Data } from "./utils/data";
// import PieChart from "./PieChart";
// import ColumnChart from './ColumnChart';
// import LineChart from './LineChart';
// import Upload_SBOM from './UploadSbom';

// const SBOMDashboard = () => {
//   const [chartData, setChartData] = useState({
//     labels: Data.map((data) => data.year),
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: Data.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0"
//         ],
//         borderColor: "black",
//         borderWidth: 2
//       }
//     ]
//   });
//   return (


//     < div className="p-10  min-h-screen" >
//       <div className='flex items-center justify-between '>
//         <h2 className='text-5xl font-bold text-white mb-10 text-center'>SBOM Overiview</h2>
//         <div className='flex gap-4 text-white'>
//           <span className=' flex p-2 bg-red-500 rounded-2xl'> Status : <p className='bg-transparent'>       error</p></span>
//           <span className=' flex p-2 bg-blue-500 rounded-2xl'>Refresh Status </span>

//         </div>

        

//       </div>
//       <div className='text-white my-4 p-4 bg-transparent shadow-lg shadow-blue-950  flex flex-col gap-4 font-semibold text-md'>
      
// <p>Current SBOM : No Data Available</p>
// <p>Last Updated: 10/10/2025, 4:04:54 PM</p>
//         </div>

//       <Upload_SBOM />
//         {/* <div className='flex flex-col text-white p-4 mb-10 bg-transparent shadow-lg shadow-blue-950 rounded-2xl gap-4 font-semibold text-md'>
     

// <p>Upload New SBOM Source</p>
// <label htmlFor="projectName">Project Name (Optional):</label>
// <input type="text" id="projectName" name="projectName" placeholder="e.g., My Web App v1.0" className="ml-2 p-1 rounded-md text-white" />
// <p>Select Upload Type:</p>
// <div className="flex items-center gap-4">
//  <select
//   id="uploadType"
//   name="uploadType"
//   class="bg-gray-800 text-white p-2 rounded-md w-full border border-gray-600 focus:border-blue-400 focus:outline-none"
// >
//   <option value="zip">Upload ZIP of entire project</option>
//   <option value="sbom">Upload SBOM file directly</option>
//   <option value="repo">Provide Repository URL</option>
// </select>

// </div>
// <label htmlFor="fileUpload">Choose File:</label>
// <div>
// <input type="file" id="fileUpload" name="fileUpload" className="ml-2 p-1 rounded-md text-white bg-gray-400 w-[220px] cursor-pointer" />
// <p> file name </p>
// <button className='bg-gray-200 text-black px-3 py-2 rounded-xl'>clear</button>
// </div>

// <button className="mt-4 py-2 px-4 w-[150px] bg-green-600 rounded-xl text-white font-semibold hover:bg-green-700 transition cursor-pointer">
//   Upload SBOM
// </button>
//         </div> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Pie Chart Card */}
//         <div className="relative bg-[#4c4cf7]/80 border border-gray-800 rounded-2xl  shadow-lg hover:bg-[#4c4cf7]/90 hover:shadow-blue-900 flex flex-col items-center justify-start p-2 overflow-hidden">
//           {/* keep your existing h2 above this grid — don't re-add */}
//           <div className="flex-1 flex items-center justify-center w-full">
//             <div className="w-full  max-w-[420px]  flex justify-center items-center">
//               {/* wrapper ensures chart can grow — chart must use maintainAspectRatio: false */}
//               <PieChart chartData={chartData} options={{
//                 maintainAspectRatio: false,
//                 plugins: { legend: { display: true, position: 'top' } }
//               }} />
//             </div>
//           </div>
//         </div>

//         {/* Column Chart Card */}
//         <div className="relative bg-[#4c4cf7]/80 border border-gray-800 rounded-2xl  shadow-lg hover:bg-[#4c4cf7]/90 hover:shadow-blue-900 flex flex-col items-center justify-start p-2 overflow-hidden">
//           <div className="flex-1 flex items-center justify-center w-full ">
//             <div className="w-full h-full">
//               <ColumnChart className="h-full w-full " chartData={chartData} options={{
//                 maintainAspectRatio: false,
//                 plugins: { legend: { display: true, position: 'top' } }
//               }} />
//             </div>
//           </div>
//         </div>

//         {/* Line Chart Card */}
//        <div className="relative bg-[#4c4cf7]/80 border border-gray-800 shadow-lg hover:bg-[#4c4cf7]/90 hover:shadow-blue-900 rounded-2xl flex flex-col items-center justify-start p-4 overflow-hidden h-[450px]">
//   <div className="flex-1 flex items-center justify-center w-full">
//     <div className="w-full h-full ">
//       <LineChart 
//         className="h-full w-full"
//         chartData={chartData}
//         options={{
//           maintainAspectRatio: false,
//           plugins: { legend: { display: true, position: 'top' } }
//         }}
//       />
//     </div>
//   </div>
// </div>

//       </div>
//     </div >

//   )
// }

// export default SBOMDashboard
import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import LineChart from "./LineChart";
import Upload_SBOM from "./UploadSbom";

const SBOMDashboard = () => {

  const [licenseChart, setLicenseChart] = useState(null);
const [dependencyChart, setDependencyChart] = useState(null);
const [vulnerabilityChart, setVulnerabilityChart] = useState(null);

  const [chartData, setChartData] = useState(null);
  const [sbomInfo, setSbomInfo] = useState({
    project_name: "",
    sbom_timestamp: "",
  });
  const [status, setStatus] = useState("Loading...");

  // 🔹 Fetch latest SBOM data
  useEffect(() => {
    const fetchSBOMData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get_latest_sbom_data", {
          withCredentials: true,
        });
        const data = response.data;

        console.log(data)

        if (!data.project_name || data.project_name === "No SBOM Data") {
          setStatus("No SBOM Data");
        } else {
          setStatus("Fetched Successfully ");
        }

        setSbomInfo({
          project_name: data.project_name,
          sbom_timestamp: data.sbom_timestamp
            ? new Date(data.sbom_timestamp).toLocaleString()
            : "N/A",
        });

        setLicenseChart({
  labels: data.license_chart.labels || [],
  datasets: [
    {
      label: "License Distribution",
      data: data.license_chart.data || [],
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
});

setDependencyChart({
  labels: data.dependency_chart.labels || [],
  datasets: [
    {
      label: "Dependency Summary",
      data: data.dependency_chart.data || [],
      backgroundColor: [
        "rgba(153,102,255,1)",
        "#ff6384",
        "#36a2eb",
        "#ffce56",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
});

setVulnerabilityChart({
  labels: data.vulnerability_chart.labels || [],
  datasets: [
    {
      label: "Vulnerability Severity",
      data: data.vulnerability_chart.data || [],
      backgroundColor: [
        "#4caf50",
        "#ffeb3b",
        "#ff9800",
        "#f44336",
        "#9c27b0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
});

      } catch (error) {
        console.error("Error fetching SBOM data:", error);
        setStatus("Error fetching data ❌");
      }
    };

    fetchSBOMData();
  }, []);

  return (
    <div className="p-10 min-h-screen text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold mb-10 text-center">
          SBOM Overview
        </h2>
        <div className="flex gap-4">
          <span className="flex p-2 bg-red-500 rounded-2xl">
            Status: <p className="ml-2">{status}</p>
          </span>
          <button
            onClick={() => window.location.reload()}
            className="p-2 bg-blue-500 rounded-2xl hover:bg-blue-600 transition"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="text-white my-4 p-4 bg-transparent shadow-lg shadow-blue-950 flex flex-col gap-4 font-semibold text-md">
        <p>Current SBOM: {sbomInfo.project_name || "N/A"}</p>
        <p>Last Updated: {sbomInfo.sbom_timestamp}</p>
      </div>

      <Upload_SBOM />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* Pie Chart - License */}
  <div className="bg-[#4c4cf7]/80 border border-gray-800 rounded-2xl shadow-lg p-4">
    {licenseChart && <PieChart chartData={licenseChart} />}
  </div>

  {/* Column Chart - Dependency */}
  <div className="bg-[#4c4cf7]/80 border border-gray-800 rounded-2xl shadow-lg p-4">
    {dependencyChart && <ColumnChart chartData={dependencyChart} />}
  </div>

  {/* Line Chart - Vulnerability */}
  <div className="bg-[#4c4cf7]/80 border border-gray-800 rounded-2xl shadow-lg p-4 h-[450px]">
    {vulnerabilityChart && <LineChart chartData={vulnerabilityChart} />}
  </div>
</div>

    </div>
  );
};

export default SBOMDashboard;

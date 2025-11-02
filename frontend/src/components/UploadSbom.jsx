import axios from "axios";
import { useState } from "react";

function UploadSbom() {
  const [file, setFile] = useState(null);
  const [uploadType, setUploadType] = useState("zip_project");
  const [projectName, setProjectName] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("sbom_file", file);
    formData.append("upload_type", uploadType);
    formData.append("project_name", projectName || "Unnamed Project");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload_sbom", // 🔥 Change this to your backend URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // include cookies if your Flask app uses login sessions
        }
      );

      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Upload failed!");
    }
  };

  return (
    <div className="p-4 space-y-4 text-white bg-transparent shadow-lg shadow-blue-950 rounded-2xl flex flex-col items-start">
      <h2 className="text-xl font-bold">Upload SBOM File</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2"
      />

      <select
        value={uploadType}
        onChange={(e) => setUploadType(e.target.value)}
        className="border p-2"
      >
        <option value="zip_project">ZIP Project</option>
        <option value="dependency_file">Dependency File</option>
        <option value="docker_tar">Docker TAR</option>
        <option value="existing_sbom_json">Existing SBOM JSON</option>
      </select>

      <input
        type="text"
        placeholder="Enter Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadSbom;

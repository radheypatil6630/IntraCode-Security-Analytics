import React from 'react'

const Dashboard = () => {
  return (
  <div class="p-8 rounded-lg shadow-lg text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard,Name!</h2>
    <p class="text-gray-400 mb-6">This is your secure SBOM management area.</p>

    <div class="mt-8 mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-inner">
        <h3 class="text-xl font-semibold text-blue-700 mb-3">Your Personal Access Token (PAT)</h3>
        <input type="hidden" id="rawPatExpiryValue" value="user"/>

        
            <p class="text-gray-800 break-all font-mono bg-blue-100 p-3 rounded-md mb-3 border border-blue-300 relative">
                <span id="patToken">personal_access_token </span>
                <button onclick="copyToClipboard('patToken')"
                        class="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
                    Copy
                </button>
            </p>
            <p class="text-sm text-gray-600 mb-2">
                This token is valid until:
                <span id="patExpiry" class="font-semibold">
                  
                </span>
            </p>
            <p class="text-sm text-red-600">
                Keep this token secure! Do not share it.You will use this in your VS Code extension.
            </p>
            <button onclick="regeneratePat()"
                    class="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300 shadow-md">
                Regenerate Token
            </button>
     
            <p class="text-red-500 mb-4">No Personal Access Token found for your account.</p>
            <button onclick="regeneratePat()"
                    class="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 shadow-md">
                Generate First Token
            </button>
     
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
            <h3 class="text-xl font-semibold text-blue-700 mb-3">Manage SBOMs</h3>
            <p class="text-gray-600 mb-4">View, upload, and analyze your Software Bill of Materials.</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" id="sbom-dashboard" onclick="redirect('dasboard')">Go to SBOMs</button>
        </div>
        <div class="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
            <h3 class="text-xl font-semibold text-green-700 mb-3">Vulnerability Insights</h3>
            <p class="text-gray-600 mb-4">Get real-time alerts and detailed reports on component vulnerabilities.</p>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">View Vulnerabilities</button>
        </div>
        <div class="bg-yellow-50 p-6 rounded-lg shadow-md border border-yellow-200">
            <h3 class="text-xl font-semibold text-yellow-700 mb-3">License Compliance</h3>
            <p class="text-gray-600 mb-4">Ensure all your software components meet licensing requirements.</p>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">Check Licenses</button>
        </div>
    </div>

    <div class="mt-8">
        <p class="text-gray-400">
            This dashboard will eventually integrate with your VS Code extension for seamless, real-time SBOM updates.
        </p>
    </div>
</div>
  )
}

export default Dashboard

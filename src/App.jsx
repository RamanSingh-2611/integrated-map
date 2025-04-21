import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FaHome, FaBell, FaHistory, FaUser, FaPhone, FaSyncAlt } from "react-icons/fa";
import avatar from "./assets/avatar.png";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "20px",
};

const center = {
  lat: 26.846695,
  lng: 80.946167,
};

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBd5QVz4xtW-c0N6bDvJRPIbwL6CnpMVBw", 
  });

  return (
    <div className="font-sans p-4 bg-gray-50 min-h-screen pb-20">
      <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">Welcome, Laura</h1>

      <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
        {isLoaded && (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
            <Marker position={center} />
          </GoogleMap>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <img src={avatar} alt="Sophie" className="w-10 h-10 object-cover" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Sophie</h2>
            <p className="text-sm text-gray-500">Last seen 3 min ago • Battery 72%</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-1">
            <FaSyncAlt /> Refresh
          </button>
          <button className="bg-purple-500 text-white px-3 py-2 rounded-lg whitespace-nowrap">
            Set Safe Zone
          </button>
          <button className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 ">
            <FaPhone /> Call
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner p-3 flex justify-around items-center z-50">
        <FaHome className="text-xl text-gray-600" />
        <FaBell className="text-xl text-gray-600" />
        <FaHistory className="text-xl text-gray-600" />
        <FaUser className="text-xl text-gray-600" />
      </div>
    </div>
  );
};

export default App;

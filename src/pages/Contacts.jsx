import React from 'react'


import { GoogleMap, LoadScript } from "@react-google-maps/api";
export default function Contacts() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  
  const center = {
    lat: 37.7749,  // 你可以改成任何经纬度
    lng: -122.4194,
  };
  return (
    <div>
            {/* 谷歌地图: npm install @react-google-maps/api */}
            <LoadScript googleMapsApiKey="你的_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* 不加 Marker、Polyline，只是地图本身 */}
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";


function Map() {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const getCurrentLocation = (callback) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          callback({ lat: latitude, lng: longitude });
        });
      }
    };

  useEffect(() => {
    getCurrentLocation(setCenter);
  }, []);

//   const REACT_APP_GOOGLE_MAPS_API_KEY= "AIzaSyDI3mv9uBBYwlcSmU3Pk8cf1Sn7qg36dg8"

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
  bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}` }}
  defaultCenter={{ center }}
  center={center}
  defaultZoom={15}
></GoogleMapReact>
    </div>
  );
}

export default Map;

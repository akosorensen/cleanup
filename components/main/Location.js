import { useState } from "react";

export function useLocation() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: false,
        timeout: 200000,
        maximumAge: 1000,
      }
    );
  };

  const clearLocation = () => {
    setLatitude(0);
    setLongitude(0);
  };

  return { latitude, longitude, getLocation, clearLocation };
}

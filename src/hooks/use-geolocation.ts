import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      console.log,
      { enableHighAccuracy: true },
    );
  }, []);

  return location;
};

export default useGeolocation;

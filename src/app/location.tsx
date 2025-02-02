"use client";
import { useState } from "react";
import { useTelegram } from "./hooks/useTelegram";

export default function LocationComponent() {
  const { tg } = useTelegram();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const requestLocation = () => {
    if (!tg?.locationManager) {
      alert("Location Manager is not supported on this device.");
      return;
    }

    // Initialize Location Manager
    tg.locationManager.init(() => {
      console.log("LocationManager initialized");

      // Request location
      tg.locationManager.getLocation((data: any) => {
        if (!data) {
          alert("Location access denied!");
          return;
        }

        setLocation({
          lat: data.latitude,
          lng: data.longitude,
        });
      });
    });
  };

  return (
    <div>
      <button onClick={requestLocation}>📍 Get My Location</button>
      {location && <p>Latitude: {location.lat}, Longitude: {location.lng}</p>}
    </div>
  );
}

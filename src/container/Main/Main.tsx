import "./Main.scss";
import { GreetingCard } from "../../components/GreetingCard/GreetingCard";
import { useEffect, useState } from "react";
import { Coordiants } from "../../types/Coordiants";
import { WeatherCard } from "../WeatherCard/WeatherCard";

const getGreeting = (currentHour: number): String => {
  if (currentHour < 12) return "Morning";
  else if (currentHour < 18) return "Afternoon";
  else if (currentHour < 21) return "Evening";
  else return "Night";
};

export const Main = () => {
  const [location, setLocation] = useState<Coordiants>(null);
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
    return () => {};
  }, []);

  return (
    <main className="main-content">
      <GreetingCard timeOfDay={getGreeting(currentHour)} />
      {location && <WeatherCard coordinates={location} />}
    </main>
  );
};
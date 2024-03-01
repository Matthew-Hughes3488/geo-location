import { useEffect, useState } from "react";
import { Coordiants } from "../../types/Coordiants";
import "./WeatherCard.scss";
import { WeatherApiResponse } from "../../types/WeatherApiResponse";

type WeatherCardProps = {
  coordinates: Coordiants;
};

export const WeatherCard = ({ coordinates }: WeatherCardProps) => {

  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${coordinates?.latitude},${coordinates?.longitude}`
      );
      const data: WeatherApiResponse = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [])
  
  return <section className="weather-card"></section>;
};

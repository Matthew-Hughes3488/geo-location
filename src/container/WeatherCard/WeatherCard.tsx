import { useEffect, useState } from "react";
import { Coordiants } from "../../types/Coordiants";
import "./WeatherCard.scss";
import { WeatherApiResponse } from "../../types/WeatherApiResponse";

type WeatherCardProps = {
  coordinates: Coordiants;
};

export const WeatherCard = ({ coordinates }: WeatherCardProps) => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null
  );

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${coordinates?.latitude},${coordinates?.longitude}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: WeatherApiResponse = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <section className="weather-card">
      {weatherData ? (
        <>
          <h1 className="weather-card__conditons">
            {weatherData.current.condition.text}
          </h1>
          <img src={weatherData.current.condition.icon} alt="" />
          <ul className="weather-card__list">
            <li className="weather-card__list--item">Temprature: {weatherData.current.temp_c}C</li>
            <li className="weather-card__list--item">Feels Like: {weatherData.current.feelslike_c}C</li>
            <li className="weather-card__list--item">Wind Speed: {weatherData.current.wind_mph}mph</li>
            <li className="weather-card__list--item">Humidity: {weatherData.current.humidity}%</li>
            <li className="weather-card__list--item">Cloud: {weatherData.current.cloud}</li>
          </ul>
        </>
      ) : (
        <h1 className="weather-card__error-text">
          Sorry, the detect weather spell seems to have failed
        </h1>
      )}
    </section>
  );
};

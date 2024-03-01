import { Coordiants } from "../../types/Coordiants"
import "./WeatherCard.scss"

type WeatherCardProps = {
  coordinates: Coordiants;
}

export const WeatherCard = ({coordinates} : WeatherCardProps) => {
  return (
    <section className="weather-card">
    </section>
  )
}

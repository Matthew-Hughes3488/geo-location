import "./GreetingCard.scss"

type GreetingCardProps = {
    timeOfDay : String
}

export const GreetingCard = ({timeOfDay} : GreetingCardProps) => {
  return (
    <section className='greeting-card'>
        <h2 className='greeting-card__title'>Good {timeOfDay} Wizard</h2>
        <h3 className='greeting-card__text'>Here is everything you need to know to have a magical day</h3>
    </section>
  )
}

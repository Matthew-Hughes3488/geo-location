import { GreetingCard } from "../../components/Greeting card/GreetingCard";

export const Main = () => {

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const greeting = getGreeting(currentHour);

  return (
    <main className="main-content">
        <GreetingCard timeOfDay={getGreeting(currentHour)}/>
    </main>
  )
}

const getGreeting = (currentHour : number) : String =>{
    if(currentHour < 12)
        return "Morning";
    else if(currentHour < 18)
        return "Afternoon";
    else if(currentHour < 21)
        return "Evening";
    else
        return "Night"
}

import "./Header.scss"
import wizardImgSrc from "../../assets/imgs/wizard-dog.svg"

export const Header = () => {
  return (
    <section className="header">
        <img src={wizardImgSrc} alt="wizard image" className="header__image"/>
        <h1 className="header__title">Wizard Tracker</h1>
    </section>
  )
}

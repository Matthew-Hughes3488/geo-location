import "./App.scss"
import { Header } from "./components/Header/Header"
import { Main } from "./container/Main/Main"


function App() {

  return (
    <section className="app">
      <Header/>
      <Main/>
    </section>
  )
}

export default App

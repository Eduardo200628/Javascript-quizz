import { Game } from './Game'
import { Start } from './Start'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useQuestionsStore } from './store/questions'


function App() {
const questions = useQuestionsStore(State => State.questions)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Javascritp Quizz</h1>
        </div>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}

      
      </section>

      
    </>
  )
}

export default App

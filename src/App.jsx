import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useQuestionsStore } from "./store/questions";
import { Start } from "./Start";

function App() {
  const questions = useQuestionsStore((state) => state.questions);

  console.log(questions); []

  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Javascript Quizz</h1>

          <Start />

       <h2>{questions[0]?.question}</h2>
       
       <ul>
        {questions[0]?.answers.map((answers) =>(
          <li key={answers}>{answers}</li>
        ))}
       </ul>
         
        </div>
      </section>
    </>
  );
}

export default App;

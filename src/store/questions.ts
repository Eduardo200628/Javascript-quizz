import { create } from "zustand";
import type { Question } from "../types";
import confetti from 'canvas-confetti'
import { persist, devtools } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectopcines: (QuestionId: number, opcionesIndex: number) => void;
  goNextQuestions: () => void;
  goPreviousQuestions: () => void;

}

export const useQuestionsStore = create<State>()(devtools(persist((set, get) => {
  return {
    loading: false,
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => { 
      const res = await fetch("/data.json");
      const json = await res.json();

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },

    selectopcines: (QuestionId: number, opcionesIndex: number) => {
      const { questions } = get();
      // usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(questions);
      const questionIndex = newQuestions.findIndex((q) => q.id == QuestionId);
      const questionInfo = newQuestions[questionIndex];

      const isCorrectUserAnswer =
        questionInfo.respuestaCorrecta == opcionesIndex;
        if (isCorrectUserAnswer) confetti()

      // cambiar esta informacion en la copia de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: opcionesIndex,
      };
      set({ questions: newQuestions });
    },

  goNextQuestions: () =>{
    const { currentQuestion, questions} = get()
    const nextQuestion = currentQuestion +1

    if (nextQuestion < questions.length) {
      set ({ currentQuestion: nextQuestion})
    }
  },

    goPreviousQuestions: () => {
    const { currentQuestion } = get()
    const previousQuestion = currentQuestion -1

    if (previousQuestion >= 0 ) {
      set({ currentQuestion: previousQuestion})
    }
   },

   reset: () => {
    set ( { currentQuestion: 0, questions: [] } )

  }
}
}, {
  name: "questions"
})));


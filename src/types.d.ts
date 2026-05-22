export interface Question {
  id: number
  pregunta: string
  opciones: string[]
  respuestaCorrecta: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}
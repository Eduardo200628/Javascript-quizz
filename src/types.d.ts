export interface Question {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correstAnswer: number; 
    userSlectedAnswer?: number
    isCorrectUserAnswer?: boolean
}
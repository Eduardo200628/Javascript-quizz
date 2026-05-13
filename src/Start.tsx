import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const limit_quetions = 10

export const Start = () => {
  const fetchQuestions = useQuestionsStore(State => State.fetchQuestions)

const handleClick = () => {
  fetchQuestions(10);
}
  return (
    <Button onClick={handleClick} variant="contained">
      ¡Empezar!
    </Button>
  );
};
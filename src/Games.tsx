import { IconButton, Stack } from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import { type Question as QuestionType } from "./types";

const Questions = ({ info }: { info: QuestionType }) => {
    return null
};
export const Games = () => {
  const Questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

  const questionInfo = Questions[currentQuestion];

  return (
    <>
      <Question info={questionInfo} />
    </>
  );
};

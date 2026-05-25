// import { IconButton, Stack } from "@mui/material"
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import type { Question as QuestionType } from "./types";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "./Footer";

const getBackgroundColor = ( Info: QuestionType, index: number) => {
  const { userSelectedAnswer, respuestaCorrecta } = Info;
  if (userSelectedAnswer == null) return "transparent";
  if (index === respuestaCorrecta && userSelectedAnswer === respuestaCorrecta) return "transparent";
  if (index === respuestaCorrecta) return "green";
  if (index === userSelectedAnswer) return "red";
  return "transparent";
}





const Questions = ({ info }: { info: QuestionType }) => {
  const selectopciones = useQuestionsStore((state) => state.selectopcines);

  const createHandleClick = (opcinesIndex: number) => () => {
    selectopciones(info.id, opcinesIndex);
  };
  return (
    <Card variant="outlined" sx={{ bgcolor: "#333", p: 2, textAlign: "left" }}>
      <Typography variant="h5">{info.pregunta}</Typography>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.opciones.map((opciones, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
            disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}


              sx={{
                backgroundColor: getBackgroundColor(info, index),
              }}
            >
              <ListItemText primary={opciones} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export const Game = () => {
  const question = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestiosn = useQuestionsStore((state) => state.goNextQuestions);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestions,
  );

  const questionInfo = question[currentQuestion] as QuestionType;

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
          sx={{ color: "blue" }}
        >
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {question.length}
        <IconButton
          onClick={goNextQuestiosn}
          disabled={currentQuestion >= question.length - 1}
          sx={{ color: "blue" }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>

      <Questions info={questionInfo} />
      <Footer />
    </>
  );
};

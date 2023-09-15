"use client";
import {  ButtonCont, ButtonNext, ContainerQ,DivImg, DivQuestions,  DivTitle, Line, Znamya} from "./style";
import { QuestionType, TestType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import {useState, useEffect} from 'react'
import { AnswerOption} from "@/features/answerOptions";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useActions } from "@/redux/hooks/useActions";
interface Props {
  currentQuestion:QuestionType
  numberQuestions:number
  questionTestId:number
  setQuestionTestId:(questionTestId:number)=> void
}

export default function Questions({currentQuestion, numberQuestions, questionTestId, setQuestionTestId }: Props) {
  const [answerId, setAnswerId] = useState<number | null>(null);
  const isAnswer = typeof answerId === "number";
  const {addCorrectAnswers} = useActions()
  const correct = useAppSelector(state=> state.correctAnswers)
  console.log(correct)
  return (
    <>
    <DivQuestions>
      <DivImg>
        <Znamya
          dangerouslySetInnerHTML={{ __html: currentQuestion.znamya }}
        ></Znamya>
      </DivImg>
      <DivTitle>
        <p>{currentQuestion.question}</p>
      </DivTitle>
      <Line></Line>
    </DivQuestions>
    <ContainerQ>
      {currentQuestion.answers.map((e) => {
        return (
          <AnswerOption key={e.id}answer={e} addCorrectAnswers={addCorrectAnswers} isAnswer={isAnswer} correctAnswersId={currentQuestion.correctAnswersIds[0]} setAnswerId={setAnswerId} /> 
        );
      })}
    </ContainerQ>
    <ButtonCont>
      {isAnswer && (
        <ButtonNext
          onClick={() => {
            setQuestionTestId(questionTestId+1)
            setAnswerId(null)
          }}
          disabled={!isAnswer}
        >
          Далее
        </ButtonNext>

      )}
    </ButtonCont>
  </>
  );
}

"use client";

import {
  FinishBody,
  LinkContainer,
  List,
  Name,
  NavLine,
  Repeat,
  Response,
  TestName,
  Title,
  Top,
} from "./style";
import { Kruk } from "../NavMenu/style";
import { CounterState } from "@/redux/features/currentTestState";
import { useActions } from "@/redux/hooks/useActions";
import { useTitle } from "@/shared/hooks/useTitle";
import { useEffect } from "react";
import NavIcons from "@/features/nawIcons";

export default function Finish({
  id,
  name,
  lengthTest,
  correctAnswers,
  errors,
}: CounterState) {
  const { nullCorrectAnswers } = useActions();

  const title = useTitle(correctAnswers, lengthTest);
  console.log(title);
  return (
    <>
      <Title>{title}</Title>
      <FinishBody>
        <Name>
          <Kruk
            dangerouslySetInnerHTML={{ __html: '<span class="red">â</span>[5' }}
          ></Kruk>
          <TestName>{name}</TestName>
        </Name>
        <Response $fg={true}>Правильных ответов: {correctAnswers} </Response>
        <Response $fg={false}>Ошибок: {errors}</Response>
      </FinishBody>
      <NavLine>
        <NavIcons nullCorrectAnswers={nullCorrectAnswers} id={Number(id)} />
      </NavLine>
    </>
  );
}

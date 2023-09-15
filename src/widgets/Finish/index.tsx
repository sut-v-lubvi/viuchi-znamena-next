"use client";

import { FinishBody, LinkContainer, List, Name, NavLine, Repeat, Response, Title, Top } from "./style";
import { Kruk } from "../NavMenu/style";
import { CounterState } from "@/redux/features/currentTestState";
import { BsRepeat } from 'react-icons/bs'
import { GrList } from 'react-icons/gr'
import { RiVipCrownLine } from 'react-icons/ri'
import { Line } from "../Questions/style";
import { useActions } from "@/redux/hooks/useActions";



export default function Finish ({id,name,correctAnswers,errors}:CounterState) {
    const {nullCorrectAnswers} = useActions()
  return (
        <>
        <Title>Аминь!</Title>
        <FinishBody>
          <Name><Kruk dangerouslySetInnerHTML={{ __html: '<span class="red">â</span>[5' }}></Kruk>{name}</Name>
          <Response $fg={true}>Правильных ответов: {correctAnswers} </Response>
          <Response $fg={false}>Ошибок: {errors}</Response>
        </FinishBody>  
        <NavLine>
        <LinkContainer onClick={()=>{nullCorrectAnswers()}} href={`/testing/${id}`}><Repeat/></LinkContainer>
        <LinkContainer href={`/testing`}><List/></LinkContainer>
        <LinkContainer href={`/testing`}><Top/></LinkContainer>
        </NavLine>
        </>
  );
}
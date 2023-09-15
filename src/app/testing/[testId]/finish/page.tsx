"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import Finish from "@/widgets/Finish";



export default function FinishContainer () {
  const {id, name,correctAnswers,errors } = useAppSelector(state=> state)
  return (
  <Finish name={name} correctAnswers={correctAnswers} errors={errors} id={id}/>
  );
}

"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useTitle } from "@/shared/hooks/useTitle";
import Finish from "@/widgets/Finish";

export default function FinishContainer() {
  const { id, name, correctAnswers, errors, lengthTest, evaluation } =
    useAppSelector((state) => state);

  return (
    <Finish
      evaluation={evaluation}
      lengthTest={lengthTest}
      name={name}
      correctAnswers={correctAnswers}
      errors={errors}
      id={id}
    />
  );
}

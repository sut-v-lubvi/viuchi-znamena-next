"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useTitle } from "@/shared/hooks/useTitle";
import Finish from "@/widgets/Finish";

export default function FinishContainer() {
  const { id, name, correctAnswers, errors, lengthTest } = useAppSelector(
    (state) => state
  );
  // const title = useTitle(correctAnswers, lengthTest);
  return (
    <Finish
      lengthTest={lengthTest}
      name={name}
      correctAnswers={correctAnswers}
      errors={errors}
      id={id}
    />
  );
}

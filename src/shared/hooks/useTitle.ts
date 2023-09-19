import { useEffect, useState } from "react";

export const useTitle = (correctAnswers: number, lengthTest: number) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("useTitle " + correctAnswers);
    debugger;
    console.log(lengthTest / 1.5);
    if (correctAnswers < lengthTest / 2) {
      setTitle("Попробуй ещё раз");
    }
    if (correctAnswers > lengthTest / 2 && correctAnswers < lengthTest / 1.5) {
      setTitle("Не плохо");
    }
    if (correctAnswers > lengthTest / 1.5) {
      setTitle("А ты хорош");
    }
    if (correctAnswers === lengthTest) {
      setTitle("Аминь!");
    }
  }, [correctAnswers]);
  return title;
};

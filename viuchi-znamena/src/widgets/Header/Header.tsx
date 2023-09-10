"use client";
import { BurgerButton } from "@/shared/ui/BurgerButton";
import style from "./Header.module.css";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";

export default function Header() {
  const [stateMenu, setStateMenu] = useState<boolean>(false);
  return (
    <>
      <div
        className={
          stateMenu
            ? [style.header__container, style.header__shadow].join(" ")
            : style.header__container
        }
      >
        <div className={style.burger_button}>
          <BurgerButton stateMenu={stateMenu} setStateMenu={setStateMenu} />
        </div>
        <div className={style.header__title}>
          <h1 className={style.title}>ZNAMENA</h1>
        </div>
        <div className={style.false_div}></div>
      </div>
      <NavMenu stateMenu={stateMenu} />
    </>
  );
}

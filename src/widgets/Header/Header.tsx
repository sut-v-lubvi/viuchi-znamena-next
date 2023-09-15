"use client";
import { BurgerButton } from "@/shared/ui/BurgerButton";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
import { FalseBlock, HeaderContainer, HeaderTitle, Title } from "./style";

export default function Header() {
  const [stateMenu, setStateMenu] = useState<boolean>(false);
  return (
    <>
      <HeaderContainer $stateMenu={stateMenu}>
        <div>
          <BurgerButton stateMenu={stateMenu} setStateMenu={setStateMenu} />
        </div>
        <HeaderTitle>
          <Title>ZNAMENA</Title>
        </HeaderTitle>
        <FalseBlock>

        </FalseBlock>
      </HeaderContainer>
      <NavMenu stateMenu={stateMenu} setStateMenu={setStateMenu} />
    </>
  );
}

"use client";
import {
  Container,
  Doc,
  FlexContainer,
  Help,
  Icon,
  KingIc,
  Kruk,
  Links,
  Menu,
  Prof,
} from "./style";

interface Props {
  stateMenu: boolean;
  setStateMenu: (stateMenu: boolean) => any;
}
export default function NavMenu({ stateMenu, setStateMenu }: Props) {
  return (
    <Menu $stateMenu={stateMenu}>
      <Container>
        <FlexContainer>
          <Links
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            href="/testing"
          >
            <Kruk
              dangerouslySetInnerHTML={{
                __html: '<span class="red">â</span>[5',
              }}
            ></Kruk>
            Выучи знамёна
          </Links>
          <Links
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            href="/profile"
          >
            <Prof />
            Мой профиль
          </Links>
          <Links
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            href="/rating"
          >
            <KingIc />
            Рейтинг
          </Links>
          <Links
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            href="/documentation"
          >
            <Doc />
            Документация
          </Links>
          <Links
            onClick={() => {
              setStateMenu(!stateMenu);
            }}
            href="/help"
          >
            <Help />
            Помощь
          </Links>
        </FlexContainer>
      </Container>
    </Menu>
  );
}

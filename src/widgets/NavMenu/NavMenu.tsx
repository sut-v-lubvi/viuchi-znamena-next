"use client";
import { type } from "os";
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
  Settings,
} from "./style";
import { ReactNode } from "react";

interface Props {
  stateMenu: boolean;
  setStateMenu: (stateMenu: boolean) => any;
}
type LinksType = {
  href: string;
  icon: ReactNode;
  text: string;
};
const dataLinks: LinksType[] = [
  {
    href: "/testing",
    icon: (
      <Kruk
        dangerouslySetInnerHTML={{
          __html: '<span class="red">â</span>[5',
        }}
      ></Kruk>
    ),
    text: "Выучи знамёна",
  },
  {
    href: "/profile",
    icon: <Prof />,
    text: " Мой профиль",
  },
  {
    href: "/rating",
    icon: <KingIc />,
    text: "Рейтинг",
  },
  {
    href: "/documentation",
    icon: <Doc />,
    text: "Доукументация",
  },
  {
    href: "/help",
    icon: <Help />,
    text: "Поддержка",
  },
  {
    href: "/addTest",
    icon: <Settings />,
    text: "Настройки",
  },
];
export default function NavMenu({ stateMenu, setStateMenu }: Props) {
  return (
    <Menu $stateMenu={stateMenu}>
      <Container>
        <FlexContainer>
          {dataLinks.map((e) => {
            return (
              <Links
                onClick={() => {
                  setStateMenu(!stateMenu);
                }}
                href={e.href}
              >
                {e.icon}
                {e.text}
              </Links>
            );
          })}
        </FlexContainer>
      </Container>
    </Menu>
  );
}

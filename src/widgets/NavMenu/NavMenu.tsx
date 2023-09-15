"use client";
import { Container, FlexContainer, Icon, Kruk, Links, Menu } from "./style";
import profileIcon from '../../../public/profile-svgrepo-com.svg'
interface Props {
  stateMenu: boolean;
  setStateMenu: (stateMenu: boolean) => any
}

export default function NavMenu({ stateMenu, setStateMenu }: Props) {

  return (
    <Menu $stateMenu={stateMenu}>
      <Container >
        <FlexContainer >
        <Links onClick = {()=>{setStateMenu(!stateMenu)}} href='/testing'><Kruk dangerouslySetInnerHTML={{ __html: '<span class="red">â</span>[5' }}></Kruk>Выучи знамёна</Links>
        <Links onClick = {()=>{setStateMenu(!stateMenu)}} href='/profile'><Icon src='./profile-svgrepo-com.png'></Icon>Мой профиль</Links>
        <Links onClick = {()=>{setStateMenu(!stateMenu)}} href='/rating'><Icon src='./rating-svgrepo-com.png'></Icon>Рейтинг</Links>
        </FlexContainer>
        </Container>
    </Menu>
  );
}

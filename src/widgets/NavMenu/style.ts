import Link from "next/link";
import {styled, css }from "styled-components"; 
 
export const Links = styled(Link)` 
  &:hover {
    cursor : pointer;
  }
  &:active {
    font-size: 25px;
  }
  transition: transform 0.1s;
  text-align: center;
  font-size: 26px;
  color: black;
  display: block;
`;

export const Container = styled.div` 
  border-radius: 20px;
  margin: 30px 15px 30px 15px;
  border: solid 2px rgb(48, 48, 48);
  width: 100vw;
  height: 88vh;
display: flex;
justify-content: center;
`;
export const FlexContainer = styled.div` 
padding-top:20px;
align-items: flex-start;
align-self: flex-start;
width: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const Menu = styled.div<{$stateMenu:boolean}>` 
  display: flex;
  justify-content: center;
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 70px;
  left: 0px;
  transform: ${({ $stateMenu }) => $stateMenu ? `translateY(0)`  :  `translateY(-100%)`};
  transition: transform 0.5s;
  background-color: white;
`;

export const Icon = styled.img` 
margin-right:16px;
 width: 33px;
 height: auto;
display: inline-block;
`;
export const Kruk = styled.span` 
font-size: 30px;
margin-right:10px;
width: 33px;
height: auto;
font-family: "znamenna"

`;
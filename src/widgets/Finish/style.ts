import Link from "next/link";
import {styled, css} from "styled-components";
import { BsRepeat } from 'react-icons/bs'
import { GrList } from 'react-icons/gr'
import { RiVipCrownLine } from 'react-icons/ri'


export const Title = styled.div`
  font-size: 24px;
  align-self: center;
`;
export const FinishBody = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
gap: 20px;

`;
export const Name = styled.div`

  margin: 0px 10px 20px 10px;
  font-size: 20px;
`;
export const Response = styled.div<{$fg:boolean}>`
  text-align: start;
  font-size: 18px;
  padding:10px;
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  border: solid 2px ${props => props.$fg ? "rgb(27, 207, 66)" : "rgb(250, 57, 57)"};
  background-color: ${props => props.$fg ? "rgb(105, 250, 136,0.2)" : "rgb(250, 92, 92,0.2)"};
`;
const any = `    &:hover{
    cursor: pointer;
    font-size: 19px;
    width:32px
}
&:active 
{
    width:30px
}
display: block;
display: flex ;
justify-content: center;

width:30px`

export const LinkContainer = styled(Link)`

    display: block;
    display: flex ;
    justify-content: center;
    width:40px;
    height: 40px;
`;

export const Repeat = styled(BsRepeat)`
${any}

`;
export const List = styled(GrList)`
${any}
`;
export const Top = styled(RiVipCrownLine)`
${any}
`;
export const NavLine = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
flex-direction: row;
gap: 30px;
`;
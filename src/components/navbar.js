import styled, {keyframes} from "styled-components";
import React, { useState } from "react";
import Hamburger from "../images/icon-hamburger.svg";
import Cross from "../images/icon-close-menu.svg";
import logo from "../images/logo.svg";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 20vh;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const listAnime = keyframes`
0%{opacity: 0};
100%{opacity: 1};
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 45%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: 45vh;
    position: absolute;
    top: 20vh;
    align-items: flex-start;
    justify-content: space-evenly;
    border-radius: 10px;
    background-color: ${(props) => props.theme.white};
    display : ${({ toggle }) => (toggle ? `flex` : `none`)};
    animation: ${listAnime} 0.4s ease-in 1;
`;
const Li = styled.div`
  margin: 0 0 0 25px;
  color: ${(props) => props.theme.white};
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover{
    color: ${props => props.theme.moderateCyan}
  }
  @media (max-width: 768px) {
    color: ${(props) => props.theme.black};
    font-size: 16px;
    font-weight: 600;
  }
`;
const Icon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const Innerdiv = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    width: 90%;
  }
`;
const Line = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 0.5px;
    background-color: ${(props) => props.theme.lightGray};
  }
`;
const Ham = styled.img`
  display: ${({ toggle }) => (toggle ? `none` : `flex`)};
  animation: ${listAnime} 0.6s ease-in-out 1;
`;
const Cro = styled.img`
  display: ${({ toggle }) => (toggle ? `flex` : `none`)};
  animation: ${listAnime} 0.6s ease-in-out 1;
`;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Div>
      <Innerdiv>
        <img src={logo} alt="logo" />
        <Icon>
          <Ham
            src={Hamburger}
            onClick={() => setToggle(true)}
            toggle = {toggle}
            alt="Hamburger"
          />
          <Cro src={Cross} onClick={() => setToggle(false)} toggle = {toggle} alt="cross"/>
        </Icon>
      </Innerdiv>
      <Ul toggle = {toggle}>
        <Li>about</Li>
        <Line></Line>
        <Li>discover</Li>
        <Line></Line>
        <Li>get started</Li>
      </Ul>
    </Div>
  );
};

export default Navbar;

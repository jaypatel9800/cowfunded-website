import Bookmark  from "../../images/icon-bookmark.svg";
import Bookmarked from "../../images/icon-bookmarked.svg"
import { useState } from "react";
import styled from "styled-components";
import masterCraft from "../../images/logo-mastercraft.svg";

const Button = styled.button`
width: 170px;
height: 50px;
background-color: #117766;
border: none;
border-radius: 40px;
font-size: 12px;
color: white;
font-weight: 700;
transition: all 0.4s ease-in;
&:hover{
    opacity: 0.9;
}
`;

const Book = styled.button`
  display: flex;
  width: 175px;
  height: 50px;
  background-color: ${(props) => props.theme.lightGray};
  justify-content: space-between;
  border-radius: 50px;
  align-items: center;
  border: none;
  padding: ${({book}) => book ? `0 30px 0 0` : '0 20px 0 0'};
  transition: all 0.4s ease-in;
  &:hover{
      opacity: 0.9;
  }
`;
const H3 = styled.h3`
  text-transform: capitalize;
  font-size: 14px;
  color: ${({book}) => book ? `hsl(0, 0%, 48%)` : 'hsl(176, 50%, 47%)'};
`;

const Img = styled.img`
position: absolute;
top: 45vh;
`;
const First = () => {
  const [book, setBook] = useState(false);
  return (
    <div>
      <Img src={masterCraft} alt="master-craft" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div>
        <Button>Back this project</Button>
        <Book onClick={() => setBook(!book)} book={book}>
            <img src={book ? Bookmark : Bookmarked} alt="bookmark"/>
          <H3 book={book}>{book ? `bookmark` : `bookmarked`}</H3>
        </Book>
      </div>
    </div>
  );
};

export default First;

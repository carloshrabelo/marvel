import React from "react";
import ComicList from "containers/ComicList";
import CharacterSelected from "containers/CharacterSelected";
import styled from "styled-components";

const Pagination = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  list-style: none;
`;

const Home = () => {
  return (
    <>
      <ComicList />
      <CharacterSelected />
      <Pagination>
        {Array(5)
          .fill("")
          .map((a, i) => (
            <li key={i}>
              <a href="#">{i + 1}</a>
            </li>
          ))}
      </Pagination>
    </>
  );
};
export default Home;

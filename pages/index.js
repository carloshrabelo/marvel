import React from "react";
import ComicList from "containers/ComicList";
import CharacterSelected from "containers/CharacterSelected";
import Pagination from "components/Pagination";

const Home = () => {
  return (
    <>
      <Pagination page={3} pageSize={5} pages={5} />
      <ComicList />
      <CharacterSelected />
    </>
  );
};
export default Home;

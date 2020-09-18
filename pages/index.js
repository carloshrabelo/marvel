import React from "react";
import ComicList from "containers/ComicList";
import CharacterSelected from "containers/CharacterSelected";
import Pagination from "components/Pagination";
import { find } from "reducers/comics";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";

const Home = () => {
  const comics = useStore().comics;
  const character = useStore().character;
  const dispatch = useDispatch();
  return (
    <>
      <Pagination
        page={comics.page}
        pages={comics.pages}
        onChange={(page) => dispatch(find(character, { page }))}
      />
      <ComicList />
      <CharacterSelected />
    </>
  );
};
export default Home;

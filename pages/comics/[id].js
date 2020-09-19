import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { find } from "reducers/comic";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";
import ComicDetails from "components/ComicDetails";
import Placeholder from "components/ComicDetails/Placeholder";

const Home = () => {
  const router = useRouter();
  const comic = useStore().comic;
  const dispatch = useDispatch();
  const { id } = router.query;

  useEffect(() => {
    if (id && comic.id !== id) {
      dispatch(find(id));
    }
  }, [id]);

  return comic.isLoading ? (
    <Placeholder {...comic.data} />
  ) : (
    <ComicDetails {...comic.data} />
  );
};
export default Home;

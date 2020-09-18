import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import Button from "components/Button";
import { find } from "reducers/characters";
import { find as findComics } from "reducers/comics";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";

import debounce from "helpers/debounce";
import ListItem from "components/ListItem";
import * as S from "./styles";

const Search = (props) => {
  const characters = useStore().characters;
  const dispatch = useDispatch();

  const [showList, setShowList] = useState(false);

  const search = (e) => dispatch(find(e));
  const getComicsByCharacter = (e) => dispatch(findComics(e));

  const optimizedSearch = debounce(search, 500);
  const onInput = (e) => optimizedSearch(e.target.value);
  const hideList = debounce(() => setShowList(false), 200);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    optimizedSearch(query);
  };

  return (
    <S.Wrapper {...props} onFocus={() => setShowList(true)} onBlur={hideList}>
      <S.Form onSubmit={onSubmit} onInput={onInput}>
        <S.Search
          name="query"
          placeholder="🎵 There goes my hero 🎶"
          autoComplete="off"
        />
        <Button type="submit" color="primary">
          Buscar Herói
        </Button>
      </S.Form>
      {showList && (
        <Link href="/">
          <S.List>
            {characters.data.map((character) => (
              <ListItem
                {...character}
                key={character.id}
                onClick={() => getComicsByCharacter(character)}
                button
              />
            ))}
          </S.List>
        </Link>
      )}
    </S.Wrapper>
  );
};

Search.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  creators: PropTypes.arrayOf(PropTypes.string),
};

export default Search;

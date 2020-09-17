import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import { find } from "reducers/heroes";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";

import debounce from "helpers/debounce";
import * as S from "./styles";
import ListItem from "./ListItem";

const Search = (props) => {
  const heroes = useStore().heroes;
  const dispatch = useDispatch();

  const [showList, setShowList] = useState(false);

  const search = (e) => dispatch(find(e));

  const optimizedSearch = debounce(search, 500);
  const onInput = (e) => optimizedSearch(e.target.value);
  const hideList = debounce(() => setShowList(false), 200);

  const getComics = (e) => {
    console.info(e);
  };

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
        <S.List>
          {heroes.data.map((hero) => (
            <ListItem
              {...hero}
              key={hero.id}
              onClick={() => getComics(hero.id)}
            />
          ))}
        </S.List>
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

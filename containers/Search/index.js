import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";

import debounce from "helpers/debounce";
import * as S from "./styles";
import ListItem from "./ListItem";

const Search = (props) => {
  const [showList, setShowList] = useState(false);
  const [heroes, setHeroes] = useState([]);

  const search = (e) =>
    !e
      ? setHeroes([])
      : fetch(`/api/hero/${e}`)
          .then((res) => res.json())
          .then(setHeroes);

  const optimizedSearch = debounce(search, 500);
  const onInput = (e) => optimizedSearch(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    optimizedSearch(query);
  };

  const toggleList = {
    onFocus: () => setShowList(true),
    onBlur: () => setShowList(false),
  };

  return (
    <S.Wrapper {...props}>
      <S.Form onSubmit={onSubmit} onInput={onInput}>
        <S.Search
          name="query"
          placeholder="🎵 There goes my hero 🎶"
          autoComplete="off"
          {...toggleList}
        />
        <Button type="submit" color="primary" {...toggleList}>
          Buscar Herói
        </Button>
      </S.Form>
      {showList && (
        <S.List>
          {heroes.map((hero) => (
            <ListItem {...hero} key={hero.id} />
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

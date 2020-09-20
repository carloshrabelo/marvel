import React from "react";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";
import ListItem from "components/ListItem";
import Button from "components/Button";
import styled from "styled-components";
import { find } from "reducers/comics";

const Wrapper = styled.div`
  background: var(--white);
  bottom: 0;
  display: flex;
  left: var(--space);
  position: sticky;
  right: var(--space);
  z-index: 99;
`;

const SListItem = styled(ListItem)`
  flex: 1;
`;

const CharacterSelected = (props) => {
  const character = useStore().character;
  const dispatch = useDispatch();
  const resetFilter = () => dispatch(find());

  return !character ? null : (
    <Wrapper {...props}>
      <SListItem {...character} />
      <Button color="primary" onClick={resetFilter}>
        Remover
      </Button>
    </Wrapper>
  );
};
export default CharacterSelected;

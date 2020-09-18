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

const Home = (props) => {
  const character = useStore().character;
  const dispatch = useDispatch();

  return !character ? null : (
    <Wrapper {...props}>
      <SListItem {...character} />
      <Button
        color="primary"
        onClick={() => {
          dispatch(find());
        }}
      >
        Remover
      </Button>
    </Wrapper>
  );
};
export default Home;

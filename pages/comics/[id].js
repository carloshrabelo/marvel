import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { find } from "reducers/comic";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const WriterArea = styled.div`
  display: flex;
  gap: var(--space);
  justify-content: space-between;
`;

const Img = styled.img`
  margin-right: var(--space);
  width: 350px;
`;

const Content = styled.div`
  max-width: 350px;
`;

const Description = styled.div`
  margin-top: var(--space);
  text-align: justify;
`;

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

  const { description, title, date, thumbnail, writer, penciler } = comic.data;

  return (
    <Wrapper>
      <Img src={thumbnail} />
      <Content>
        <h1>{title}</h1>
        <h2>Publicação</h2>
        {date}
        <WriterArea>
          <div>
            <h2>Escritor</h2>
            {writer}
          </div>
          <div>
            <h2>Desenhista</h2>
            {penciler}
          </div>
        </WriterArea>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};
export default Home;

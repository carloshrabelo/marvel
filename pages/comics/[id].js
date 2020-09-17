import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const { id } = router.query;
  const [comic, setComic] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/comics/${id}`)
        .then((results) => results.json())
        .then(setComic);
    }
  }, [id]);
  const { description, title, date, thumbnail, writer, penciler } = comic;

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

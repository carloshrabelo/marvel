import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    background: black;
    flex: 1;
    flex-direction: column;
  }
`;

export const WriterArea = styled.div`
  display: flex;
  gap: var(--space);
  justify-content: space-between;
`;

export const Img = styled.img`
  margin-right: var(--space);
  width: 350px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 350px;

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    color: var(--white);
    left: 0;
    max-width: 100%;
    padding: 0 var(--space) var(--space);
    position: sticky;
    right: 0;
    text-shadow: 1px 1px var(--primary);

    h1,
    h2,
    h3 {
      text-shadow: 1px 1px var(--white);
    }
  }
`;

export const Description = styled.div`
  margin-top: var(--space);
  text-align: justify;
`;

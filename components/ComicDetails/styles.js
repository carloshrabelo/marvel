import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const WriterArea = styled.div`
  display: flex;
  gap: var(--space);
  justify-content: space-between;
`;

export const Img = styled.img`
  margin-right: var(--space);
  width: 350px;
`;

export const Content = styled.div`
  max-width: 350px;
`;

export const Description = styled.div`
  margin-top: var(--space);
  text-align: justify;
`;

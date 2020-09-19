import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const ComicDetails = ({
  description,
  title,
  date,
  thumbnail,
  writers,
  pencilers,
}) => (
  <S.Wrapper>
    <S.Img src={thumbnail} />
    <S.Content>
      <h1>{title}</h1>
      <h2>Publicação</h2>
      {date}
      <S.WriterArea>
        <div>
          <h2>Escritor{writers.length > 1 && "es"}</h2>
          {writers.length ? writers.join(", ") : "(?)"}
        </div>
        <div>
          <h2>Desenhista{pencilers.length > 1 && "s"}</h2>
          {pencilers.length ? pencilers.join(", ") : "(?)"}
        </div>
      </S.WriterArea>
      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Wrapper>
);

ComicDetails.defaultProps = {
  writers: [],
  pencilers: [],
};

ComicDetails.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  thumbnail: PropTypes.string,
  writers: PropTypes.arrayOf(PropTypes.string),
  pencilers: PropTypes.arrayOf(PropTypes.string),
};

export default ComicDetails;

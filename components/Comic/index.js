import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import * as S from "./styles";

const Comic = ({ id, title, thumbnail, creators = [] }) => (
  <S.Comic>
    <S.Thumbnail src={thumbnail} />
    <S.Title>{title}</S.Title>
    <S.Creators>{creators.join(", ")}</S.Creators>
    <Link href={`/comics/${id}`} passhref>
      <S.Button as="a">Ver detalhes</S.Button>
    </Link>
  </S.Comic>
);

Comic.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  creators: PropTypes.arrayOf(PropTypes.string),
};

export default Comic;

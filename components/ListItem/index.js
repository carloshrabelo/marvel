import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const ListItem = ({ thumbnail, name, description, ...props }) => (
  <S.Item {...props}>
    <S.Thumbnail src={thumbnail} />
    <div>
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>
    </div>
  </S.Item>
);

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;

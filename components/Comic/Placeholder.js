import React from "react";
import Skeleton from "react-loading-skeleton";

import * as S from "./styles";

const Placeholder = () => (
  <S.Comic>
    <S.Thumbnail as={Skeleton} height={252} width={168} />
    <S.Title>
      <Skeleton width={100} />
    </S.Title>
    <S.Creators>
      <Skeleton width={75} />
    </S.Creators>
    <Skeleton width={85} height={36} />
  </S.Comic>
);

export default Placeholder;

import React from "react";
import Skeleton from "react-loading-skeleton";
import * as S from "./styles";

const ComicDetailsPlaceHolder = () => (
  <S.Wrapper>
    <S.Img as={Skeleton} height={500} width={350} />
    <S.Content>
      <h1>
        <Skeleton width={350} />
      </h1>
      <h2>
        <Skeleton width={300} />
      </h2>
      <Skeleton width={120} />
      <S.WriterArea>
        <div>
          <h2>
            <Skeleton width={80} />
          </h2>
          <Skeleton width={120} />
        </div>
        <div>
          <h2>
            <Skeleton width={100} />
          </h2>
          <Skeleton width={120} />
        </div>
      </S.WriterArea>
      <S.Description>
        <Skeleton count={5} />
      </S.Description>
    </S.Content>
  </S.Wrapper>
);

export default ComicDetailsPlaceHolder;

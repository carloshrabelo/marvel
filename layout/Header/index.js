import Link from "next/link";
import React from "react";
import * as S from "./styles";

const Header = () => (
  <S.Header>
    <Link href="/" passhref>
      <S.Link>
        <S.Title>Marvelous</S.Title>
      </S.Link>
    </Link>
    <S.Search />
  </S.Header>
);

export default Header;

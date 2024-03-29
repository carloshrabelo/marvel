import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const getRange = ({ currentPage, pages, middle, length }) => {
  const atBegin = currentPage < middle;
  const atEnd = currentPage > pages - middle;

  if (atBegin) return [0, length];
  if (atEnd) return [pages - length, pages];

  return [currentPage - middle, currentPage + middle - 1];
};

export const Pagination = ({ pages, page, length, onChange, ...props }) => {
  if (!pages) return null;
  const [currentPage, setCurrentPage] = useState(page);

  const isFirst = currentPage === 1;
  const isLast = currentPage === pages;
  const middle = Math.ceil(length / 2);

  const range = getRange({ currentPage, pages, middle, length });
  const list = Array.from(Array(pages).keys(), (index) => ++index).slice(
    ...range
  );

  useEffect(() => {
    setCurrentPage(page * 1);
  }, [page]);

  const setPage = (newPage) => {
    if (newPage === currentPage || newPage < 1 || newPage > pages) {
      return;
    }
    setCurrentPage(newPage);
    onChange(newPage);
  };

  return (
    <S.Pagination {...props}>
      <S.Item
        disabled={isFirst}
        onClick={() => setPage(1)}
        data-testid="item-first"
      >
        &lt;&lt;
      </S.Item>
      <S.Item
        disabled={isFirst}
        onClick={() => setPage(currentPage - 1)}
        data-testid="item-prev"
      >
        &lt;
      </S.Item>
      {list.map((page) => (
        <S.Item
          key={page}
          onClick={() => setPage(page)}
          active={currentPage === page}
        >
          {page}
        </S.Item>
      ))}
      <S.Item
        onClick={() => setPage(currentPage + 1)}
        disabled={isLast}
        data-testid="item-next"
      >
        &gt;
      </S.Item>
      <S.Item
        onClick={() => setPage(pages)}
        disabled={isLast}
        data-testid="item-last"
      >
        &gt;&gt;
      </S.Item>
    </S.Pagination>
  );
};

Pagination.defaultProps = {
  length: 5,
  onChange: (_) => _,
};

Pagination.propTypes = {
  onChange: PropTypes.func,
  page: PropTypes.number,
  length: PropTypes.number,
  pages: PropTypes.number,
};

export default Pagination;

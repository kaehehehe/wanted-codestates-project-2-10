import React from 'react';

import * as S from './style';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

function Keyword({ name, index, targetIndex }) {
  return (
    <S.Item className={index === targetIndex && 'focus'}>
      <SearchIcon width={15} />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
}

export default Keyword;

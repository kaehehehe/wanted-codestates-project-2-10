import React from 'react';
import { GrSearch } from 'react-icons/gr';

import * as S from './style';

function Keyword({ name }) {
  return (
    <S.Item>
      <GrSearch />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
}

export default Keyword;
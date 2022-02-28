import React, { useContext } from 'react';
import { GrSearch } from 'react-icons/gr';

import * as S from './style';
import { GlobalContext } from '../../App';

function Keyword({ name, index }) {
  const { focusIndex } = useContext(GlobalContext);
  return (
    <S.Item className={focusIndex === index && 'focus'}>
      <GrSearch />
      <S.Name>{name}</S.Name>
    </S.Item>
  );
}

export default Keyword;

import React, { useContext } from 'react';

import * as S from './style';
import { GlobalContext } from '../../App';
import Keyword from '../Keyword';

function AutoComplete() {
  const { searchResult } = useContext(GlobalContext);

  return (
    <S.Items>
      <S.Title>추천 검색어</S.Title>
      <S.Wrapper>
        {searchResult.map((data) => (
          <Keyword key={data.id} name={data.name} />
        ))}
      </S.Wrapper>
    </S.Items>
  );
}

export default AutoComplete;

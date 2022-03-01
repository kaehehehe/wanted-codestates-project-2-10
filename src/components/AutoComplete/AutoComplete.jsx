import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { InputContext } from '../../App';
import Keyword from '../Keyword';

function AutoComplete() {
  const { inputValue } = useContext(InputContext);
  const data = useSelector((store) => store.data);
  const searchResult = data?.data.length === 0 ? null : data.data.slice(0, 8);


  return (
    <S.Items>
      <S.Title>추천 검색어</S.Title>
      <S.Wrapper>
        {inputValue &&
          searchResult.map((data) => (
            <Keyword key={data.id} name={data.name} />
          ))}
      </S.Wrapper>
    </S.Items>
  );
}

export default AutoComplete;

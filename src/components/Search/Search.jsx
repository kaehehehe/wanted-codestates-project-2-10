import React, { useState, useEffect, useContext } from 'react';
import { GrSearch } from 'react-icons/gr';
import { useWindowSize } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './style';
import { InputContext } from '../../App';
import { getData } from '../../redux/searchSlice';
import AutoComplete from '../AutoComplete';

function Search() {
  const { inputValue, setInputValue } = useContext(InputContext);
  const [targetIndex, setTargetIndex] = useState(-1);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);
  const searchResult = data?.data.length === 0 ? null : data.data.slice(0, 7);

  const { width } = useWindowSize(null);
  const [responsive, setResponsive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setTargetIndex(-1);
  }, [isFocus]);

  useEffect(() => {
    if (width < 1044) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, [width]);

  useEffect(() => {
    if (inputValue === '') {
      return;
    }
    dispatch(getData(inputValue));
  }, [inputValue]);

  const handleKeyUp = (e) => {
    setInputValue(e.target.value);
    const maxIndex = searchResult?.length - 1;

    switch (e.key) {
      case 'ArrowUp':
        if (targetIndex === 0) {
          return;
        } else {
          const index = targetIndex - 1;
          setTargetIndex(index);
          setInputValue(searchResult[index].name);
        }
        break;
      case 'ArrowDown':
        if (targetIndex === maxIndex) {
          return;
        } else {
          const index = targetIndex + 1;
          setTargetIndex(index);
          setInputValue(searchResult[index].name);
        }
        break;
      default:
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.SearchBar>
          <S.Icon>
            <GrSearch />
          </S.Icon>
          <S.Input
            type="search"
            value={inputValue}
            placeholder="질환명을 입력해 주세요."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
          />
          {responsive ? (
            <S.IconBtn>
              <GrSearch />
            </S.IconBtn>
          ) : (
            <S.Button>검색</S.Button>
          )}
        </S.SearchBar>
      </S.Wrapper>
      {isFocus && inputValue && searchResult && (
        <AutoComplete targetIndex={targetIndex} />
      )}
      {isFocus && inputValue && !searchResult && (
        <S.Message>검색어 없음</S.Message>
      )}
    </>
  );
}

export default Search;

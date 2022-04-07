import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './style';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { InputContext } from '../../App';
import { getData } from '../../redux/searchSlice';
import AutoComplete from '../AutoComplete';

function Search() {
  const { inputValue, setInputValue } = useContext(InputContext);
  const [targetIndex, setTargetIndex] = useState(-1);
  const [searchedValue, setSearchedValue] = useState('');
  const [width, setWidth] = useState(null);
  const [responsive, setResponsive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);
  const searchResult = data?.data.length === 0 ? null : data.data;

  useEffect(() => {
    setTargetIndex(-1);
  }, [isFocus]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.outerWidth);
    });
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
  }, [searchedValue]);

  const handleKeyUp = (e) => {
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
      default:
        return;
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.SearchBar>
          <S.Icon>
            <SearchIcon width={18} />
          </S.Icon>
          <S.Input
            type="search"
            value={inputValue}
            placeholder="질환명을 입력해 주세요."
            onChange={(e) => {
              setInputValue(e.target.value);
              setSearchedValue(e.target.value);
            }}
            onKeyUp={handleKeyUp}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
          />
          {responsive ? (
            <S.IconBtn>
              <SearchIcon width={15} />
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

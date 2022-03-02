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
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);
  let searchResult = data?.data.length === 0 ? false : true;

  const { width } = useWindowSize(null);
  const [responsive, setResponsive] = useState(false);

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
    switch (e.key) {
      case 'ArrowUp':
        if (targetIndex < 0) {
          return;
        } else {
          setTargetIndex(targetIndex - 1);
        }
        break;
      case 'ArrowDown':
        if (targetIndex >= 7) {
          return;
        }
        setTargetIndex(targetIndex + 1);
        break;
      default:
        break;
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
            value={value}
            placeholder="질환명을 입력해 주세요."
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleKeyUp}
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
      {inputValue && searchResult && <AutoComplete targetIndex={targetIndex} />}
      {inputValue && !searchResult && <S.Message>검색어 없음</S.Message>}
    </>
  );
}

export default Search;

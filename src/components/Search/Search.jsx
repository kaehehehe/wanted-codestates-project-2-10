import React, { useState, useRef, useEffect } from 'react';
import { GrSearch } from 'react-icons/gr';
import { useWindowSize } from 'react-use';

import * as S from './style';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [hasOptions, setHasOptions] = useState(false);
  const [options, setOptions] = useState([]);
  const [focusIndex, setFocusIndex] = useState(-1);

  const widthRef = useRef(null);
  const { width } = useWindowSize(null);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (width < 1044) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, [width]);

  const handleInputChange = (e) => {};

  const handleOptionsClick = (targetWord) => {
    setInputValue(targetWord);
    setHasOptions(false);
  };

  const handleKeyUp = (e) => {
    if (options.length > 0) {
      if (e.key === 'ArrowUp') {
        if (focusIndex > 0) {
          setFocusIndex(focusIndex - 1);
        }
      } else if (e.key === 'ArrowDown') {
        if (focusIndex < options.length) {
          setFocusIndex(focusIndex + 1);
        }
      } else if (e.key === 'Enter') {
        handleOptionsClick(options[focusIndex]);
        setFocusIndex(-1);
        setHasOptions(false);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.SearchBar>
        <S.Icon>
          <GrSearch />
        </S.Icon>
        <S.Input
          type="search"
          value={inputValue}
          placeholder="질환명을 입력해 주세요."
          onChange={handleInputChange}
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
  );
}

export default Search;

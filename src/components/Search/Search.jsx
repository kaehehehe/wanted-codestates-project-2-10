import React, { useState, useEffect, useContext } from 'react';
import { GrSearch } from 'react-icons/gr';
import { useWindowSize } from 'react-use';
import axios from 'axios';

import * as S from './style';
import { GlobalContext } from '../../App';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const { searchResult, setSearchResult } = useContext(GlobalContext);

  // const [hasOptions, setHasOptions] = useState(false);
  // const [options, setOptions] = useState([]);
  // const [focusIndex, setFocusIndex] = useState(-1);

  const { width } = useWindowSize(null);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (width < 1044) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, [width]);

  useEffect(async () => {
    if (inputValue === '') {
      setSearchResult([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputValue}`
      );
      setSearchResult(response.data);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleOptionsClick = (targetWord) => {
  //   setInputValue(targetWord);
  //   setHasOptions(false);
  // };

  // const handleKeyUp = (e) => {
  //   if (options.length > 0) {
  //     if (e.key === 'ArrowUp') {
  //       if (focusIndex > 0) {
  //         setFocusIndex(focusIndex - 1);
  //       }
  //     } else if (e.key === 'ArrowDown') {
  //       if (focusIndex < options.length) {
  //         setFocusIndex(focusIndex + 1);
  //       }
  //     } else if (e.key === 'Enter') {
  //       // handleOptionsClick(options[focusIndex]);
  //       setFocusIndex(-1);
  //       setHasOptions(false);
  //     }
  //   }
  // };

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

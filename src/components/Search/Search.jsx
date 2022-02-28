import React, { useState, useEffect, useContext } from 'react';
import { GrSearch } from 'react-icons/gr';
import { useWindowSize } from 'react-use';
import axios from 'axios';

import * as S from './style';
import { GlobalContext } from '../../App';

function Search() {
  const { setSearchResult, inputValue, setInputValue } =
    useContext(GlobalContext);

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
      const value = [];
      setSearchResult(value);
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

  const handleKeyUp = (e) => {
    // if (e.key === 'ArrowUp') {
    //   const nextFocus = focusIndex === 0 ? focusIndex : focusIndex - 1;
    //   setFocusIndex(nextFocus);
    // } else if (e.key === 'ArrowDown') {
    //   const len = searchResult.length;
    //   const nextFocus = focusIndex === len ? focusIndex : focusIndex + 1;
    //   setFocusIndex(nextFocus);
    // }
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

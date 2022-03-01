import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from './redux/search';
import { RootState } from './redux';

import GlobalStyle from './GlobalStyle';
import Search from './components/Search/Search';
import AutoComplete from './components/AutoComplete';
export const GlobalContext = createContext(null);

function App() {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [focusIndex, setFocusIndex] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(inputValue))
    
  }, [inputValue]);

  useSelector((store: RootState) => store.search);
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <h1>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
        <GlobalContext.Provider
          // @ts-ignore
          value={{
            inputValue,
            setInputValue,
            searchResult,
            setSearchResult,
            focusIndex,
            setFocusIndex,
          }}
        >
          <Search />
          {inputValue && searchResult.length > 0 && <AutoComplete />}
          {inputValue && searchResult.length === 0 && (
            <div className="message">검색어 없음</div>
          )}
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;

import React, { useState, createContext } from 'react';
import './App.css';

import GlobalStyle from './GlobalStyle';
import Search from './components/Search/Search';
import AutoComplete from './components/AutoComplete';
export const GlobalContext = createContext(null);

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <h1>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
        <GlobalContext.Provider value={{ searchResult, setSearchResult }}>
          <Search />
          {searchResult.length > 0 && <AutoComplete />}
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;

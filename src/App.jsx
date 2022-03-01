import React, { useState, createContext } from 'react';
import './App.css';

import Search from './components/Search/Search';
import GlobalStyle from './GlobalStyle';
export const InputContext = createContext(null);

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <h1>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
        <InputContext.Provider value={{ inputValue, setInputValue }}>
          <Search />
        </InputContext.Provider>
      </div>
    </>
  );
}

export default App;

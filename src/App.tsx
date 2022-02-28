import React from 'react';
import './App.css';

import GlobalStyle from './GlobalStyle';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <Search />
    </>
  );
}

export default App;

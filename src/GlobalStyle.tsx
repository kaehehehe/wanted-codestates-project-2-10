import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #CAE9FF;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  h1 {
    margin-top: 100px;
    font-size: 3.8rem;
    text-align: center;

    @media screen and (max-width: 1044px) {
      font-size: 2.2rem;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .message {
    font-size: 1.6rem;
    text-align: start;
    margin-top: 10px;
    width: 563px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;

    @media screen and (max-width: 1044px) {
      width: 90vw;
    }
  }
`;

export default GlobalStyle;

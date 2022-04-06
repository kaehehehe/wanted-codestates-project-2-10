import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const SearchBar = styled.div`
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 563px;
  height: 65px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 50px;
  position: relative;

  @media screen and (max-width: 1044px) {
    width: 90vw;
    height: 47px;
  }
`;

export const Icon = styled.div`
  margin: 0 10px;

  @media screen and (max-width: 1044px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  width: 430px;
  font-size: 1.8rem;
  outline: none;
  border: none;

  @media screen and (max-width: 1044px) {
    padding-left: 15px;
    font-size: 1.6rem;
    width: 90%;
  }
`;

export const Button = styled.button`
  background-color: #007be9;
  width: 96px;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  height: 67px;
  overflow: hidden;
  position: absolute;
  top: -1px;
  right: -1px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  cursor: pointer;
`;

export const IconBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
`;

export const Message = styled.div`
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
`;

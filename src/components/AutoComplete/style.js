import styled from 'styled-components';

export const Items = styled.div`
  list-style: none;
  background-color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  width: 563px;

  .focus {
    background-color: red;
  }

  @media screen and (max-width: 1044px) {
    width: 90vw;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: gray;
  font-weight: 400;
  margin: 10px;
  text-align: start;
`;

export const Wrapper = styled.ul`
  max-height: 320px;
  overflow-y: scroll;
`;

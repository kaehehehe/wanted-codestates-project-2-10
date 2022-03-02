import styled from 'styled-components';

export const Items = styled.div`
  width: 563px;
  list-style: none;
  background-color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 15px;
  text-align: center;

  .focus {
    background-color: rgba(0, 0, 0, 0.12);
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
  max-height: 330px;
`;

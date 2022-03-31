import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 15px 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
`;

export const Name = styled.span`
  margin-left: 10px;
`;

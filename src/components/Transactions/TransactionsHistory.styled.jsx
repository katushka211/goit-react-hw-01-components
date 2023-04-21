import styled from 'styled-components';

export const Table = styled.table`
  margin: 30px auto;
  width: 50%;
  text-align: center;
  border-spacing: 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.colors.white};
`;

export const Head = styled.thead`
  height: 30px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const Row = styled.tr`
  height: 30px;
  text-transform: capitalize;
  :nth-child(even) {
    background-color: ${props => props.theme.colors.lightgray};
  }
`;

export const Td = styled.td`
  border-right: 1px solid rgb(224, 224, 239);
`;

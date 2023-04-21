import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  padding: 7px 12px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${props => {
    return props.active ? props.theme.colors.green : props.theme.colors.red;
  }};
`;

export const Name = styled.p`
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
`;

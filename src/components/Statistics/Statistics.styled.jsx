import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 400px;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkgray};
`;

export const List = styled.ul`
  display: flex;

  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${item => getRandomHexColor()};
  width: 100%;
  height: 70px;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

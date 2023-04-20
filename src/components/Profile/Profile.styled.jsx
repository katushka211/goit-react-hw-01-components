import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.lightgrey};
  padding: 50px;
`;

export const ProfileCard = styled.div`
  margin: 0 auto;
  background-color: ${props => props.theme.colors.white};
  width: 230px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  text-align: center;
`;

export const Description = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  padding-bottom: 5px;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.lightgrey};
`;

export const Name = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const UserInfo = styled.p`
  color: ${props => props.theme.colors.darkgrey};
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.light};
  border-top: 1px solid ${props => props.theme.colors.lightgrey};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  border-right: 1px solid ${props => props.theme.colors.lightgrey};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.darkgrey};
  font-weight: 500;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

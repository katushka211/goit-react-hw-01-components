import PropTypes from 'prop-types';
import { Card, Name, Status } from './FriendCard.styled';

export const FriendCard = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Card>
      <Status active={isOnline === true}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Card>
  );
};

FriendCard.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

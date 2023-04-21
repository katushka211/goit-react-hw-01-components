import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';
import { Item, List } from './FriendList.styled';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <FriendCard item={item} />
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

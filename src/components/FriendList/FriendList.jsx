import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FriendCard } from './FriendCard';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendCard item={item} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

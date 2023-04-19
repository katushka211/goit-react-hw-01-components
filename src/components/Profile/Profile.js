import PropTypes from 'prop-types';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} width="120" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <div>
        <ul>
          <li>
            <p>Followers:</p>
            <p>{followers}</p>
          </li>
          <li>
            <p>Views:</p>
            <p>{views}</p>
          </li>
          <li>
            <p>Likes:</p>
            <p>{likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

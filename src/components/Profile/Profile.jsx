import PropTypes from 'prop-types';
import {
  Container,
  ProfileCard,
  Avatar,
  Description,
  Name,
  UserInfo,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

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
    <Container>
      <ProfileCard>
        <Description>
          <Avatar src={avatar} alt={username} width="120" />
          <Name>{username}</Name>
          <UserInfo>@{tag}</UserInfo>
          <UserInfo>{location}</UserInfo>
        </Description>
        <List>
          <Item>
            <Label>Followers:</Label>
            <Quantity>{followers}</Quantity>
          </Item>
          <Item>
            <Label>Views:</Label>
            <Quantity>{views}</Quantity>
          </Item>
          <Item>
            <Label>Likes:</Label>
            <Quantity>{likes}</Quantity>
          </Item>
        </List>
      </ProfileCard>
    </Container>
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

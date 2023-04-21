import { Layout } from './Layout/Layout';
import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Layout>
      <Profile item={user} />
      <Statistics stats={data} />
      <FriendList items={friends} />
    </Layout>
  );
};

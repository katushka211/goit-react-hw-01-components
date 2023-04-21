import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Profile item={user} />
      <Statistics stats={data} />
    </Layout>
  );
};

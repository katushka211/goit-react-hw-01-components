import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};

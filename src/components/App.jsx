import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <>
      <Profile item={user} />
    </>
  );
};

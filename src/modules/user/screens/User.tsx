import Screen from '../../../shared/components/screen/Screen';
import { useUser } from '../hooks/useUser';

const User = () => {
  const { users } = useUser();

  console.log('users', users);

  return (
    <Screen>
      <div>user</div>
    </Screen>
  );
};

export default User;

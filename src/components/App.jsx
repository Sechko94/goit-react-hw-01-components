import user from './Data/user.json';
import { Profile } from 'components/Profile/Profile';

import data from './Data/data.json';
import { Statistics } from 'components/Statistics/Statistics';

import friends from './Data/friends.json';
import { FriendsList } from 'components/Friends/FriendsList';

import transactions from './Data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import css from 'components/Module/App.module.css'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

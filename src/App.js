import profile from './data/user.json';
import Profile from "./components/Profile";

import data from './data/data.json';
import Statistics from "./components/Statistics";

import friends from './data/friends.json';
import FriendsList from "./components/FriendList";

import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory';

export default function App() {
  return (
  <div>
    <div>
      <h2>Task_1</h2>  
      <Profile
        avatar={profile.avatar}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
          />
      </div>

    <div>
      <h2>Task_2</h2>  
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>  
      
    <div>
      <h2>Task_3</h2>  
      <FriendsList friends={friends} />
    </div> 
      
    <div>
      <h2>Task_4</h2>  
      <TransactionHistory items={transactions} />
    </div>     
      
  </div>      
  );
}



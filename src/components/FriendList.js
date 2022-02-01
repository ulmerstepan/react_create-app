import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";

export default function FriendsList({friends}) {

    return (
        <ul className="friends-list">
            {friends.map( friend  => (
                <li key={friend.id} className="friend-item">
                <FriendsListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                </li>    
            )
            )}
        </ul>
        
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    )
};


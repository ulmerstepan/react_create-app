import PropTypes from "prop-types";

export default function FriendsListItem({ avatar, name, isOnline }) {
    return (
        <div>
            <span className="friend__is-online">{isOnline}</span>
            <img className="friend__img" src={avatar} alt={name} width="50" />
            <p className="friend__name">{name}</p>
        </div>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.oneOf([true, false]),
};
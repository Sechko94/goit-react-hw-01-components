import PropTypes from 'prop-types'
import { FriendsListItem } from 'components/Friends/FriendsIistItem';
import css from 'components/Friends/Friends.module.css'



export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsListItem
                  key={id}
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                />
            ))
            }
</ul>
    )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
import PropTypes from 'prop-types';
import css from 'components/Friends/Friends.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline
            ? css.status + ' ' + css.online
            : css.status + ' ' + css.offline
        }
      />
      <img
        className={css.avatar}
        src={avatar}
        alt={name + 'avatar'}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

import { FaHeart, FaMapMarkerAlt, FaUserPlus } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username} </p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>
          <FaMapMarkerAlt className={css.icon} />
          {location}
        </p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsitem}>
          <span className={css.label}>
            <FaUserPlus className={css.icon} />
            Followers
          </span>
          <span className={css.quantity}>1000</span>
        </li>
        <li className={css.statsitem}>
          <span className={css.label}>
            <AiFillEye className={css.icon} />
            Views
          </span>
          <span className={css.quantity}>2000</span>
        </li>
        <li className={css.statsitem}>
          <span className={css.label}>
            {' '}
            <FaHeart className={css.icon} />
            Likes
          </span>
          <span className={css.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

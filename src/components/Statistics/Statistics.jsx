import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => {
          const randomHexColor = {
            backgroundColor: getRandomHexColor(),
          };

          return (
            <li className={css.item} key={id} style={randomHexColor}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

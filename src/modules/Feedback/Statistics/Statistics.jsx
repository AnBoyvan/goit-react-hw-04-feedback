import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
const Statistics = ({ options, total, positivePercentage }) => {
  const { good, neutral, bad } = options;
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

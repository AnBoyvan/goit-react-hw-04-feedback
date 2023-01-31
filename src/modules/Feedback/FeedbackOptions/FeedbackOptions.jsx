import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <div className={css.options}>
      {buttons.map(option => (
        <button
          className={css.btn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

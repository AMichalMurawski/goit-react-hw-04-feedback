import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, ...props }) => {
  const capitalizeFirstLetter = ([first, ...rest]) => {
    return [first.toUpperCase(), ...rest].join('');
  }

  return (
    <ul className={css['btn-list']}>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button
              className={css.button}
              onClick={e => props.onLeaveFeedback(option)}
            >
              {capitalizeFirstLetter(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

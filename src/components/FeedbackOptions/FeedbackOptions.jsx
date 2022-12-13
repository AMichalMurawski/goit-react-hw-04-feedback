import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  capitalizeFirstLetter = ([first, ...rest]) => {
    return [first.toUpperCase(), ...rest].join('');
  };

  render() {
    const { options } = this.props;
    return (
      <ul className={css['btn-list']}>
        {options.map((option, index) => (
          <li key={index}>
            <button
              className={css.button}
              onClick={e => this.props.onLeaveFeedback(option)}
            >
              {this.capitalizeFirstLetter(option)}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

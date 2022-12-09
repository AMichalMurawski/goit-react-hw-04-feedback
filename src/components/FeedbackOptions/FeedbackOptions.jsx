import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({onLeaveFeedback}) => (
        <ul className={css["btn-list"]}>
            <li><button className={css.button} onClick={onLeaveFeedback}>Good</button></li>
            <li><button className={css.button} onClick={onLeaveFeedback}>Neutral</button></li>
            <li><button className={css.button} onClick={onLeaveFeedback}>Bad</button></li>
        </ul>
)
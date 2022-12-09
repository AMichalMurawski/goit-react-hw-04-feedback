import css from "./Statistics.module.css";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
        <ul className={css.list}>
            <li><p className={css.text}>Good: {good}</p></li>
            <li><p className={css.text}>Nautral: {neutral}</p></li>
            <li><p className={css.text}>Bad: {bad}</p></li>
            <li><p className={css.text}>Total: {total}</p></li>
            <li><p className={css.text}>Positive feedback: {positivePercentage}</p></li>
        </ul>
)
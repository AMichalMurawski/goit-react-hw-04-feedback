import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notifications/Notification';
import React, { useState, useEffect, useCallback } from 'react';
import css from './css/styles.module.css';

const initialStatistics = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export function App() {
  const [statistics, setStatistics] = useState(initialStatistics);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const value = Object.values(statistics);
    const newValue = value.reduce((new2, val) => new2 + val, 0);
    setTotal(newValue);
  }, [statistics]);
  useEffect(() => {
    const newValue = Math.round((statistics.good / total) * 100);
    setPercentage(newValue);
  }, [statistics.good, total]);

  function handleClick(option) {
    statistics[option] = statistics[option] + 1;
    setStatistics({ ...statistics });
  }

  return (
    <div className={css.conteiner}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(statistics)}
          onLeaveFeedback={option => handleClick(option)}
        />
      </Section>
      <Section title="Statistics">
        {statistics.good > 0 ? (
          <Statistics
            good={statistics.good}
            neutral={statistics.neutral}
            bad={statistics.bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

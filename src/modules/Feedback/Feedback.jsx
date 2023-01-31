import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from '../../shared/components/Notification/Notification';
import css from './Feedback.module.css';

const Feedback = ({ title }) => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addVote = vote => {
    setVotes(prevVotes => {
      return { ...prevVotes, [vote]: prevVotes[vote] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = votes;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = votes;
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Section title={'Please leave the feedback'}>
      <FeedbackOptions options={votes} onLeaveFeedback={addVote} />
      <h4 className={css.title}>Statistic</h4>
      {countTotalFeedback() !== 0 ? (
        <Statistics
          options={votes}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export default Feedback;

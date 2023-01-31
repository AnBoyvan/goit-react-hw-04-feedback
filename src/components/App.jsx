import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addVote = vote => {
    this.setState(prevState => ({
      [vote]: prevState[vote] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  }

  render() {
    const total = this.countTotalFeedback();

    return (
      <Section title="Please leave the feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.addVote} />
        <h4 className={css.title}>Statistic</h4>
        {total !== 0 ? (
          <Statistics
            options={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notifications/Notification";
import css from "./css/styles.module.css"

export class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.countTotalFeedback = this.countTotalFeedback.bind(this);
        this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
    }

    handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        this.setState(prevState => {
            return ({ [name]: prevState[name] + 1 })
        })
        this.countTotalFeedback()
    }

    countTotalFeedback = () => {
        const value = Object.values(this.state);
        return value.reduce((new2, val) => new2 + val, 0)
    }
    countPositiveFeedbackPercentage() {
        const {good} = this.state
        const total = this.countTotalFeedback()
        return (Math.round((good / total) * 100) + "%")
    }
     

    render() {
        const {good, neutral, bad} = this.state
        const total = this.countTotalFeedback()
        const percentage=this.countPositiveFeedbackPercentage()
        return (
    <div className={css.conteiner}>
            <Section title="Please leave feedback">
              <FeedbackOptions
                onLeaveFeedback={this.handleClick}
              />
            </Section>
            <Section title="Statistics">
              {total>0 ?
                (<Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={percentage}
                />) :
                (<Notification
                  message="There is no feedback"
                />)
              }
            </Section>
            </div>
        )
    }
};

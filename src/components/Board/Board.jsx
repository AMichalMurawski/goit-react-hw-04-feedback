// import css from './Board.css';
import { Component } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';

export class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        this.setState(prevState => {
            return({[name]: prevState[name] + 1})
        })
    }

    render() {
        const statistic = this.state
        return (
            <div>
                <Feedback onClick={this.handleClick} />
                <Statistics value={statistic} />
            </div>
        )
    }
}
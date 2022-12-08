import css from './Board.css';
import { Component } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';

export class Board extends Component{
    static defaultProps= {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0
    }
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: this.props.initialNeutral,
            bad: this.props.initialBad
        };
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e) {
        const name = e.target.textContent.toLowerCase();
        this.setState(prevState => {
            console.log(this.state)
            return({[name]: prevState[name] + 1})
        })
    }

    render() {
        const statistic = this.state
        return (
            <div>
                <Feedback onClick={this.handleClick} />
                <Statistics />
            </div>
        )
    }
}
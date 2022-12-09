import { Component } from "react";
// import css from "./Statistics.css";
import jsonFeedback from '../json/feedback.json'

export class Statistics extends Component{

    sumFeedback(value) {
        return Object.values(value).reduce((total, val) => total + val, 0)
    }
    positiveFeedback(value, good) {
        const total = this.sumFeedback(value)
        return (Math.round((good / total) * 100) + "%")
    }

    render() {
        const value=this.props.value
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>
                    {jsonFeedback.map((el, i) => {
                        return (<li key={i}><p>{el.text}: {value[el.name]}</p></li>)
                    })}
                    <li><p>Total: {this.sumFeedback(value)}</p></li>
                    <li><p>Positive feedback: {this.positiveFeedback(value, value.good)}</p></li>
                </ul>
            </div>
        )
    }
}
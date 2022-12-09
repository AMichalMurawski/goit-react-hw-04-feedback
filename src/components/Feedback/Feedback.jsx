import { Component } from "react";
// import css from "./Feedback.css";
import jsonFeedback from "../json/feedback.json"

export class Feedback extends Component {
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>
                    {jsonFeedback.map((el, i) => {
                       return (<li key={i}><button onClick={this.props.onClick}>{el.text}</button></li>)
                    })}
                </ul>
            </div>
        )
    }
}
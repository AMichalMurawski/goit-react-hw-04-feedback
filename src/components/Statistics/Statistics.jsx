import { Component } from "react";
import css from "./Statistics.css";
import jsonFeedback from '../json/feedback.json'

export class Statistics extends Component{
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>
                    {jsonFeedback.map((el, i) => {
                       return (<li key={i}><p>{el.text}:</p></li>)
                    })}
                </ul>
            </div>
        )
    }
}
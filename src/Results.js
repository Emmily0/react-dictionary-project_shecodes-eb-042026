import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {

    if (props.results) {
        return (
        <div className="Results">
            <h2 className="resultTitle">{props.results.word}</h2>
            <Phonetic phonetic={props.results.phonetic} />

            {props.results.meanings.slice(0, 1).map(function (meaning, index) {
                return (
                <div key={index}>
                <Meaning meaning={meaning} />
        </div>
        );
    })}
    </div>
        );
    } else {
        return null;
    }
}
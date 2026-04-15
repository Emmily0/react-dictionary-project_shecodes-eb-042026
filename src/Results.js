import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {

    if (!props.results || !props.results.meanings) {
        return null;
    }

    return (
        <div className="Results">
            <section>
                <h2 className="resultTitle">{props.results.word}</h2>
                <Phonetic phonetic={props.results.phonetic} />
            </section>
                
            <section>
                {props.results.meanings.slice(0, 1).map(function (meaning, index) {
                    return (
                        <div key={index}>
                        <Meaning meaning={meaning} />
                        </div>
                        );
                })}
            </section>
        </div>
    );
} 
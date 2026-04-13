import React from "react";
import "./Meaning.css";

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
            <p className="defintion">{props.meaning.definition} </p>
            <span className="example">{props.meaning.example && <em>"{props.meaning.example}"</em>}</span>
        </div>
    );
}
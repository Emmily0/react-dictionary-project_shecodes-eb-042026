import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
            <p className="definition">Definition: {props.meaning.definition} </p>
            <span className="example">{props.meaning.example && <em>Example: "{props.meaning.example}"</em>}</span>
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}
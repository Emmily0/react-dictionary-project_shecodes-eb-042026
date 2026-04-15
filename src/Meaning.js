import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

    return (
        <div className="Meaning">
            <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
            <p className="definition">{props.meaning.definition} </p>
            {props.meaning.example && (
                <div className="example">
                    <em>"{" "}{props.meaning.example}{" "}"</em>
                </div>
            )}
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}
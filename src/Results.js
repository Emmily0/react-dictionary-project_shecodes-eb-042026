import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
import Photos from "./Photos";

export default function Results(props) {

    if (!props.results || !props.results.meanings) {
        return null;
    }

    return (
        <div className="Results">
            <section className="word-card">
                <h2 className="resultTitle">{props.results.word}</h2>
                <Phonetic phonetic={props.results.phonetic} />
            </section>
                
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section className="meaning-card" key={index}>
                        <Meaning meaning={meaning} />
                        </section>
                        );
                })}

            <section className="photos-card">
                <h3 className="photos-title">Images</h3>
                <Photos photos={props.photos} />
            </section>
        </div>
    );
} 
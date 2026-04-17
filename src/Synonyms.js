import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                <div className="synonyms-title">Synonyms</div>
                <div className="synonyms-list">
                    {props.synonyms.slice(0, 5).map(function(synonym, index)
                    {
                        return (
                            <span className="display-synonyms" key={index}>
                            {synonym}
                            </span>
                        );
                    })}
                </div>   
            </div>
        );
    } else {
        return null;
    }
}
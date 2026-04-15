import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
   if (props.phonetic) {
    return (
        <div className="Phonetic">
            /{props.phonetic}/
        </div>
    );
    } else {
        return null;
    }
}
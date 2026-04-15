import React from "react";

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
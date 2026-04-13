import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
    event.preventDefault();
    let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    }
   
    return (
        <div className="Dictionary">
         <form onSubmit={search}>
             <input 
             type="search" 
             onChange={handleKeywordChange}
             className="form-control"
             placeholder="Discover the meaning of a word"/>
         </form>
         <Results results={results} />
        </div>
    );
}
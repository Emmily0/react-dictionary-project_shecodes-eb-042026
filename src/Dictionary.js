import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [error, setError] = useState(false);
   
    function handleResponse(response) {
        if (response.data && response.data.meanings) {
            setResults(response.data);
            setError(false);
        } else {
            setResults(null);
            setError(true);
        }
    }

    function search() {
        let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!keyword.trim()) {
            return;
        }
        search();
        }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
        setError(false);
        setResults(null);
    }

    function handleInputClick() {
        if (error) {
            setKeyword("");
            setResults(null);
            setError(false);
        }
    }

    return (
        <div className="Dictionary">
            {!results && !error && (
                <div className="empty-state">
                    <h2 className="empty-state-title">What word would you like to look up?</h2>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input 
                    type="search" 
                    onChange={handleKeywordChange}
                    onClick={handleInputClick}
                    placeholder="Search for a word, for example: Paris, Wine, Yoga, ..."
                    value={keyword}
                />
            </form>

            {error && (
                <div className="error-message">
                    Sorry, we could not find that word. Try another one 😊
                </div>
            )}

             {results && <Results results={results} />}
           
            </div>
        );
    } 
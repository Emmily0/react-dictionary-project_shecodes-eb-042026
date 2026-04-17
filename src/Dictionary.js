import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { ThreeDots } from 'react-loader-spinner';
import booksImage from "./images/Books-image.png";
import "./Dictionary.css";


export default function Dictionary() {
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [error, setError] = useState(false);
    const [photos, setPhotos] = useState(null);
   
  
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
  
    function handleResponse(response) {
        if (response.data && response.data.meanings) {
            setResults(response.data);
            setError(false);
        } else {
            setResults(null);
            setError(true);
        }
    }

    function handleImageResponse (response) {
        setPhotos(response.data.photos);
    }

    function search() {
        setLoading(true);
        setResults(null);
        setError(false);

        let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;


        axios.get(apiUrl).then(function (response) {
            handleResponse(response);
            setLoading(false);

            let imageApiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
            let imageApiUrl =`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
        
            axios.get(imageApiUrl).then(function (response){
                handleImageResponse(response);
            
            });

        })
        .catch(function () {
            setResults(null);
            setError(true);
            setLoading(false);
        });       
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!keyword.trim()) {
            return;
        }
        search();
        }


    return (
        <div className="Dictionary">
            {!results && !error && !loading && (
                <div className="empty-state-wrapper">
                    <h2 className="empty-state-title">
                        What word would you like to look up?
                    </h2>
                    <p className= "empty-state-subtitle">
                         Discover meanings, phonetics and synonyms in all in one place.
                    </p>
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

            {!results && !error && !loading && (
                <div className="empty-state-visual"> 
                    <img
                    src={booksImage}
                    alt="Stack of books"
                    className="empty-state-books"
                    />
                </div>
            )}

            {loading && (
            <div className="loading">
                <div className="loading-inner">
                    <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="#f2994a"
                    ariaLabel="three-dots-loading"
                    visible={true}
                    />
                <p className="loading-text">
                Looking it up</p>
                </div>
            </div>
            )}

            {error && (
                <div className="error-message">
                    Sorry, we could not find that word. Try another one 😊
                </div>
            )}

             {results && (
                <Results results={results} photos={photos} />
             )}
            </div>
        );
    } 
import React, {createContext, useContext, useState } from "react";

const ResultsContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultsContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    // /vedeos, /search, /images
    const getResults = async (url) => {
        setIsLoading(true);

        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            },
          });

          const data = await res.json();

          if (url.includes('/news')) {
              setResults(data.entries);
          } else if (url.includes('/image')) {
            setResults(data.image_results);
          } else {
            setResults(data.results);
          }

          console.log(data);

        //   setResults(data);
          setIsLoading(false);
    }

    return (
        <ResultsContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
          {children}
        </ResultsContext.Provider>
    );
}

export const useResultsContext = () => useContext(ResultsContext);
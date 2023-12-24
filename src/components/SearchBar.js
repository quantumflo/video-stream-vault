import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../redux/searchSlice";
import { setQueriedVideos } from "../redux/queriedVideosSlice";

import {
  YT_SEARCH_API,
  YT_SUGGESTIONS_API,
  REACT_APP_YOUTUBE_API_KEY,
} from "../utils/constants";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const searchCache = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    const response = await fetch(`${YT_SUGGESTIONS_API}${searchQuery}`);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

  const fetchSearchResults = async (suggestion) => {
    const response = await fetch(
      `${YT_SEARCH_API}${suggestion}&key=${REACT_APP_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    dispatch(setQueriedVideos(data.items));
  };

  const onSuggestionClick = (suggestion) => {
    fetchSearchResults(suggestion);
    setSearchQuery(suggestion);
    setSuggestionsVisible(false)
  };

  return (
    <div className="p-4 col-span-9 mx-auto relative">
      <input
        className="border h-8 rounded-l-full p-4 border-gray-500 mb-1 w-120"
        type="text"
        placeholder="Search"
        onChange={(e) => { setSuggestionsVisible(true); setSearchQuery(e.target.value)} }
        onBlur={() => setSuggestionsVisible(false)}
        value={searchQuery}
      />
      <button
        className="border h-8 border-gray-500 rounded-r-full px-1"
        onClick={() => fetchSearchResults(searchQuery)}
      >
        Search
      </button>
      {suggestionsVisible && (
        <div className="absolute bg-white border-r border-b border-l border-gray-400 w-120 z-40">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onMouseDown={() => onSuggestionClick(suggestion)}
                className="p-1 pl-3 font-medium cursor-pointer hover:bg-gray-200 z-10"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

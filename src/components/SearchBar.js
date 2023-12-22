import { useEffect, useState } from "react";
import { YT_SEARCH_API, YT_SUGGESTIONS_API } from "../constants";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    console.log(searchQuery);
    const timer = setTimeout(() => fetchSearchResults(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    const response = await fetch(`${YT_SUGGESTIONS_API}${searchQuery}`);
    const data = await response.json();
    console.log(data);
    setSuggestions(data[1]);
  };

  const filteredVideos = async (suggestion) => {
    const response = await fetch(`${YT_SEARCH_API}${suggestion}`);
    const data = await response.json();
    console.log(data);
    setSuggestions([]);
  }

  return (
    <div className=" p-4 col-span-9 mx-auto">
      <input
        className="border h-8 rounded-l-full p-4  border-gray-500 mb-1  w-120"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        onBlur={() => setSuggestions([])}
      />
      <button className="border h-8 border-gray-500 rounded-r-full px-1">
        Search
      </button>
      {suggestions.length > 0 && (
        <div className="absolute bg-white border-r border-b border-l border-gray-400  w-120">
          <ul>
            {suggestions.map((suggestion) => (
              <li onClick={() => filteredVideos(suggestion)} className="p-1 pl-3 font-medium">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

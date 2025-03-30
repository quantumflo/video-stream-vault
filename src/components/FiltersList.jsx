import FilterButton from "./FilterButton"
import React, { useRef, useState } from 'react';

const FiltersList = () => {
  const filters = ["Live", "Past", "Upcoming", "Sports", "Gaming", "Movies", "Music", "News", "Fashion", "Learning", "Finance", "Politics", "Science", "Travel", "Video", "Other"]
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 400; // Adjust the scroll amount as needed

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(container.scrollLeft);
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

  const scrollButtonCss = "bg-gray-600 text-white px-2 font-bold";
  
  return (
    <div className="flex overflow-x-hidden ">
      <button
        className={scrollButtonCss}
        onClick={() => handleScroll("left")}
      >
        {"<"}
      </button>
      <div className="flex flex-nowrap h-16 mx-5 overflow-hidden" ref={containerRef}>
        {filters.map((filter, index) => (
          <FilterButton key={index} name={filter}></FilterButton>
        ))}
      </div>
      <button
        className={scrollButtonCss}
        onClick={() => handleScroll("right")}
      >
        {">"}
      </button>
    </div>
  )
}

export default FiltersList
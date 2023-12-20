import FilterButton from "./FilterButton"

const FiltersList = () => {
  const filters = ["Live", "Past", "Upcoming", "Sports", "Gaming", "Movies", "Music", "News", "Fashion", "Learning", "Finance", "Politics", "Science & Tech", "Travel & Outdoors", "Video Games", "Other"]
  return (
    <div className="flex overflow-x-scroll">
      {filters.map((filter, index) => (
        <FilterButton key={index} name={filter}></FilterButton>
      ))}
    </div>
  )
}

export default FiltersList
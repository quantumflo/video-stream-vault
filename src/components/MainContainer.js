import React from 'react'
import VideoContainer from './VideoContainer'
import FiltersList from './FiltersList'

const MainContainer = () => {
  return (
    <div>
        <FiltersList></FiltersList>
        <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer
import React from 'react'
import VideosContainer from './VideosContainer'
import FiltersList from './FiltersList'

const MainContainer = () => {
  return (
    <div className='p-2 overflow-x-hidden'>
        <FiltersList></FiltersList>
        <VideosContainer></VideosContainer>
    </div>
  )
}

export default MainContainer
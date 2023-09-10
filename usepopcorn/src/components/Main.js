import React, {useState} from 'react'
import MoviesList from './MoviesList';
import MovieSummary from './MovieSummary';
import MovieWatchedList from './MovieWatchedList';
import ListBox from './ListBox';
import WatchBox from './WatchBox';

const Main = ({children}) => {
  
 
 

  return (
    <main className="main">
    {children}
        
      </main>
  )
}

export default Main
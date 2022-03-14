import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getItemsSuccess } from './actions';
import { getItemsFetch } from './actions';

const SearchBarResult = () => 
{
    const dispatch = useDispatch();
    const items = useSelector(state => state.myFirstReducer.items);
    const [searchInput, setSearchInput] = useState('')
    const [name, setName] = useState('');
    const [stargazerCounts, setStargazerCount] = useState('');
    const [watcherCounts, setWatcherCounts] = useState('');
    const [repos, setRepos] = useState([]);
    
    // Handle with the user's input in textfield
    const handleFilter = (event) => 
    {
        // User's inputs
        const userSearchInput = event.target.value
        setSearchInput(userSearchInput)

        // // Find the matches with both lower and upper case letter
        // const newFilter = data.filter((value) => {
        //   return value.title.toLowerCase().includes(userSearchInput.toLowerCase())
        // })
    
        // // if user types nothing
        // if (userSearchInput === '') {
        //   setFilteredData([])
        // } else {
        //   setFilteredData(newFilter)
        // }
    }

    // Set the action inside the search button
    const handleClick = () => {
      const result = dispatch(getItemsFetch());
      setRepos(result);
      console.log("This is a result", result)
      // .then((data) => {
      //   setData(data)
      // })
      // console.log(searchInput)
    }

    const setData = ({name, stargazerCounts, watcherCounts}) => {
      setName(name)
      setStargazerCount(stargazerCounts)
      setWatcherCounts(watcherCounts)
    }

    // Clear the inputs 
    // const clearInput = () => 
    // {
    //     setFilteredData([])
    //     setSearchInput('')
    // }

    return (
      <div>
        <div className="search">
            <div className="searchInputs">
                <input
                type="text"
                placeholder="Enter the project name"
                value={searchInput}
                onChange={handleFilter}
                />
                <button className="searchButton" onClick={handleClick}>Search</button>
            </div>
        </div>
        <div className="itemCards">
          <h2>{name}</h2>
          <h4>Stargazers count: {stargazerCounts}</h4>
          <h4>Watchers count: {watcherCounts}</h4>
        </div>
      </div>
    );
}

export default SearchBarResult
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getItemsSuccess } from './actions';

const SearchBarResult = () => 
{

    const [searchInput, setSearchInput] = useState('')
    
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
      console.log(searchInput)
    }

    // Clear the inputs 
    // const clearInput = () => 
    // {
    //     setFilteredData([])
    //     setSearchInput('')
    // }

    return (
    
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
            {/* show the result */}
            {/* <div className="dataResult">

            </div> */}
        </div>

       
      );
}

export default SearchBarResult
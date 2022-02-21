import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
//import { NavLink } from 'react-router-dom'


const SearchBarResult = ({data}) => 
{
    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState('')

    // Handle with the user's input in textfield
    const handleFilter = (event) => 
    {

        // User's inputs
        const searchWord = event.target.value
        setWordEntered(searchWord)

        // Find the matches with both lower and upper case letter
        const newFilter = data.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
    
        // if user types nothing
        if (searchWord === '') {
          setFilteredData([])
        } else {
          setFilteredData(newFilter)
        }
    }

    // Clear the inputs 
    const clearInput = () => 
    {
        setFilteredData([])
        setWordEntered('')
    }

    return (
        <>
            {/* Search bar */}
            <div className="search">
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Search by keyword"
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>

            {/* show the keywords  */}
            
        </>
    )
}

export default SearchBarResult
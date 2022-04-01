import React, { useEffect, useState } from 'react'
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
    const [repos, setRepos] = useState('');
    const [listData, setListData] = useState();

  const array = [dispatch(getItemsFetch())];
    
    // useEffect(() => {
    //   if(!listData) {
    //     setListData(handleFilter(""))
    //   }
    // }, [listData])
    
    // Handle with the user's input in textfield
    const handleFilter = (event) => 
    {
        // User's inputs
        const userSearchInput = event.target.value
        setSearchInput(userSearchInput)
        let arr = array.filter((item) => {
          const itemChars = item.toLowerCase();
          const matched = item.indexOf(event.toLowerCase());
          if(itemChars.indexOf(event.toLowerCase()) > -1) {
            return item
          }
        });
        return arr;
    }

    // Set the action inside the search button
    const handleClick = () => {
      const result = dispatch(getItemsFetch());
      setRepos(result);
    }

    const Lists = (props) => {
      if (props.data) {
        const Items = props.data.map((item) => {
          return <li>{item.name}</li>;
        });
        return <ul>{Items}</ul>;
      } else {
        return <p>empty list</p>;
      }
    }

    const setData = ({name, stargazerCounts, watcherCounts}) => {
      setName(name)
      setStargazerCount(stargazerCounts)
      setWatcherCounts(watcherCounts)
    }

    return (
      <div>
          <form>
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
        </form>
        {/* <div className="itemCards">
          <h2></h2>
          <h4>Stargazers count: {stargazerCounts}</h4>
          <h4>Watchers count: {watcherCounts}</h4>
        </div> */}
        <Lists data={items}/>
      </div>
    );
}

export default SearchBarResult
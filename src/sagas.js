import {call, takeEvery, put} from 'redux-saga/effects';
import { GET_ITEMS_FETCH, GET_ITEMS_SUCCESS, getItemsSuccess } from './actions';
import axios from 'axios';


// GET request from github API
// async function itemRequestApi() 
// {
//     const response = await fetch('https://api.github.com/search/repositories?q=subject');
//     return await response.json();

//     console.log(response)
// }

const loadPoem = () => {
    fetch('https://api.github.com/search/repositories?q=subject',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // setPoem(data)
      })
      .catch((error) => console.log(error))
} 

function* getItemsRequest () 
{
    try {
        // Pass all the data from API to GET_USERS_SUCCESS
        const items = yield call(loadPoem);
        yield put({type:GET_ITEMS_SUCCESS, items})
    }catch (e)
    {
        console.log("error")
    }
}

function* mySaga() {
    yield takeEvery(GET_ITEMS_FETCH, getItemsRequest);
}

export default mySaga;
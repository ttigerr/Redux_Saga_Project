import {call, takeEvery, put} from 'redux-saga/effects';
import { GET_ITEMS_FETCH, GET_ITEMS_SUCCESS, getItemsSuccess } from './actions';
import axios from 'axios';


// GET request from github API
async function itemRequestApi(subject) 
{
    const response = await fetch('https://api.github.com/search/repositories?q=subject');
    return await response.json();

    console.log(response)
}

function* getItemsRequest (action) 
{
    try {
        // Pass all the data from API to GET_USERS_SUCCESS
        const items = yield call(itemRequestApi);
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
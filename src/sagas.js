import {call, takeEvery, put} from 'redux-saga/effects';
import { GET_ITEMS_FETCH, GET_ITEMS_SUCCESS, getItemsSuccess } from './actions';


// GET request from github API
function itemRequestApi(subject) 
{
    return fetch('https://api.github.com/search/repositories?q='+ subject ).then(response => response.json());
}

function* getItemsRequest (action) 
{
    try {
        // Pass all the data from API to GET_USERS_SUCCESS
        const items = yield call(itemRequestApi, action.subject);
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
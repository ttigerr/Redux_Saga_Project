export const GET_ITEMS_FETCH = 'GET_ITEMS_FETCH';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

// This component is the redux action
// this action will trigger by middleware
export const getItemsFetch = () => ({
    type: GET_ITEMS_FETCH
});

// export const getItemsSuccess = data => ({
//     type: GET_ITEMS_SUCCESS, data
// });

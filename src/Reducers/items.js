import { GET_ITEMS_SUCCESS } from "../actions";

const myFirstReducer = (state = { items: []}, action) => {
    
    switch(action.type) {
        case GET_ITEMS_SUCCESS:
            return { ...state, items: action.items}
        default: 
            return state;
    }
}
export default myFirstReducer;

// export default (state = {}, {type, data}) => {
//     switch (type) {
//         case GET_ITEMS_SUCCESS:
//             return data;
//         default:
//             return state;
//     }
// }
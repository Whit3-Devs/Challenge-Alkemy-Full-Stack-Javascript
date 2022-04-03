import { GET_OPERATIONS_API } from "../actions/actionTypes";

const initialState = {
    operations: [],
}

export default function operations(state = initialState, {type, payload}){
    switch (type) {
        case GET_OPERATIONS_API:
            return {
                ...state,
                operations: payload
            }
        default:
            return state;
    }
}
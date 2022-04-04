import { GET_OPERATIONS_API, GET_LATEST_OPERATIONS_API, GET_ID_OPERATIONS_API } from "../actions/actionTypes";

const initialState = {
    operations: [],
    latestOperations: [],
    idOperation: {}
}

export default function operations(state = initialState, {type, payload}){
    switch (type) {
        case GET_OPERATIONS_API:
            return {
                ...state,
                operations: payload
            }
        case GET_LATEST_OPERATIONS_API:
            return {
                ...state,
                latestOperations: payload
            }
        case GET_ID_OPERATIONS_API:
            return {
                ...state,
                idOperation: payload
            }
        default:
            return state;
    }
}
import axios from "axios";
import {
  GET_ID_OPERATIONS_API,
  GET_LATEST_OPERATIONS_API,
  GET_OPERATIONS_API, SET_LOADING
} from "./actionTypes";

export function getOperationsFromAPI() {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios.get("http://localhost:3001/api/operations")
      .then((operations) => {
        dispatch(setOperations(operations.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getLatestOperationsFromAPI(amount) {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios.get("http://localhost:3001/api/operations/latest/" + amount)
      .then((operations) => {
        dispatch(setLatestOperations(operations.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getIDOperationFromAPI(id) {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios.get("http://localhost:3001/api/operations/" + id)
      .then((operations) => {
        dispatch(setOperationsId(operations.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
function setOperationsId(payload) {
  return {
    type: GET_ID_OPERATIONS_API,
    payload,
  };
}

function setOperations(payload) {
  return {
    type: GET_OPERATIONS_API,
    payload,
  };
}

function setLatestOperations(payload) {
  return {
    type: GET_LATEST_OPERATIONS_API,
    payload,
  };
}

export function postOperationsFromAPI(operation) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/api/operations", operation)
      .then(() => {
        dispatch(getOperationsFromAPI());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function putOperationsFromAPI(operation) {
  return function (dispatch) {
    axios
      .put("http://localhost:3001/api/operations", operation)
      .then(() => {
        dispatch(getOperationsFromAPI());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteOperationsFromAPI(id) {
  return function (dispatch) {
    axios
      .delete("http://localhost:3001/api/operations/" + id)
      .then(() => {
        dispatch(getOperationsFromAPI());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}
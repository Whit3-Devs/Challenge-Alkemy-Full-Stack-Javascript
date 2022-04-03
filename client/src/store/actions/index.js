import axios from "axios";
import {
  GET_OPERATIONS_API
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

function setOperations(payload) {
  return {
    type: GET_OPERATIONS_API,
    payload,
  };
}

export function postActivitiesFromAPI(operation) {
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

export function putActivitiesFromAPI(operation) {
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

export function deleteActivitiesFromAPI(id) {
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
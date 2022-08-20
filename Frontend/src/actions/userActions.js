import axios from "axios";

import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  ASSIGN_ADD_FAIL,
  ASSIGN_ADD_SUCCESS,
} from "../constants/userConstants";
import { API_URL } from "../constants/globalConstants";

export const login = (user_name, password) => async (dispatch) => {
  try {
    const inputData = { user_name, password };
    console.log(inputData.password);

    await axios.post(API_URL + "/auth/login", inputData).then((response) => {
      if (!response.data.error) {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });

        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        dispatch({ type: USER_LOGIN_FAIL, payload: response.data });

        localStorage.setItem("user", JSON.stringify(response.data));
      }
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: USER_LOGOUT });
};

export const addAssignment = (
  name,
  description,
  contribution,
  user_id,
  course_id
) => async (dispatch) => {
  try {
    console.log("form working");
    const inputData = { name, description, contribution, user_id, course_id };

    await axios
      .post(API_URL + "/settings/assignAdd", inputData)
      .then((response) => {
        if (!response.data.error) {
          dispatch({ type: ASSIGN_ADD_SUCCESS, payload: response.data });
        }
      });
  } catch (error) {
    dispatch({
      type: ASSIGN_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

import { AppDispatch } from './store';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from './userReducer';
import axios from 'axios';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    dispatch(fetchUsersSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};

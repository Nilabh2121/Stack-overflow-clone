import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    console.log(data)
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const updateProfile = (id,updateData) => async (dispatch) => {
  try {
    const {data} = await api.updatedProfile(id,updateData)
    dispatch({type: 'UPDATE_CURRENT_USER', playload: data })
    
  } catch (error) {
    console.log(error)
  }
}
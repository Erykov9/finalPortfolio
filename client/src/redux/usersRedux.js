import axios from 'axios';

/** selectors */
export const getUsers = ({users}) => users.data;

/** actions */
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

const LOAD_USERS = createActionName('LOAD_USERS');

export const loadAllUsers = (payload) =>({payload, type: LOAD_USERS})

export const fetchUsers = () => async(dispatch) => {
  try {
    const res = await axios.get('http://localhost:8000/api/users/');
    dispatch({ type: LOAD_USERS, payload: res})
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

const initialState = {
  data: [],
};

const usersReducer = (statePart = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_USERS:
      return { ...statePart, data: [...action.payload]}

    default: 
    return statePart;
  }
};

export default usersReducer;
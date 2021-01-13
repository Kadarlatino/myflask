import {ADD_POST} from '../constants/action-types'

const initialState = {
  posts: ['nothing']
};

function rootReducer(state = initialState, action) {
  if (action.type == 'APP_POST') {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;

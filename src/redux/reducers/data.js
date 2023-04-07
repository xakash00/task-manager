

export const ADD_MORE = "ADD_MORE"
export const LOADING = "LOADING"
export const UPDATE_OFFSET = "UPDATE_OFFSET"
export const SET = "SET"

const initial_state = {
  jokes: [],
  offset: 0,
  loading:false
};

function jokeReducer(state=initial_state, action) {
    switch (action.type) {
      case LOADING :{
        return {
          ...state,
          loading:true
        }
      }
      case UPDATE_OFFSET: {
        return {
          ...state,
          offset: action.offset,
          loading: true
        };
      }
      case SET: {
        return {
          ...state,
          jokes: [...state.jokes, ...action.data],
          loading: false
        };
      }
      case ADD_MORE: {
        return {
          ...state,
          jokes: [...state.jokes, ...action.data],
          loading: false
        };
      }
      default: {
        return state;
      }
    }
  }

  export default jokeReducer
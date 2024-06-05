import {
    FETCH_SONG,
    ADD_SONG,
    ADD_SONG_SUCCESS,
    UPDATE_SONG_SUCCESS,
    DELETE_SONG_SUCCESS,
    DELETE_SONG_FAILURE,
    FETCH_SONG_FAILURE,
    UPDATE_SONG_FAILURE,
    ADD_SONG_FAILURE,
    FETCH_SONG_SUCCESS,
    SEARCH_SONG_FAILURE
  } from '../actions';
  import { combineReducers } from 'redux';
 
  const initialState = {
    songs: [],
    loading: 'error',
    error: false,
  };
  
  const songReducer = (state = initialState, action) => {
    switch (action.type) {
        
      
      case FETCH_SONG_SUCCESS:
        return { 
            ...state,
          songs: action.payload, // Make sure ADD_SONG_SUCCESS payload contains array of songs
          loading: 'success', // Set loading state appropriately
          error: false, // Reset error state on success
             };
      
      case ADD_SONG_SUCCESS:
        return {
          ...state,
        songs: [...state.songs, action.payload], // Assuming action.payload is the newly added song
        loading: false,
        error: null
        };
      case UPDATE_SONG_SUCCESS:
        return {
          ...state,
          songs: state.songs.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload } : item
          ),
        };
      case DELETE_SONG_SUCCESS:
        return {
          ...state,
          songs: state.songs.filter(item => item.id !== action.payload.id),
        };
      case DELETE_SONG_FAILURE:
      case FETCH_SONG_FAILURE:
      case UPDATE_SONG_FAILURE:
      case ADD_SONG_FAILURE:
        return {
          ...state,
          loading: 'error', // Set loading state to error on failure
          error: action.payload, // Set error message
        };
        case SEARCH_SONG_FAILURE:
          return {
            ...state,
            loading: 'error', // Set loading state to error on failure
            error: action.payload, // Set error message
          };
      default:
        return state; // Return the original state if action type doesn't match
    }
  };
  
  const rootReducer = combineReducers({
    song: songReducer,
  });
  
  
  
  export default rootReducer;
  
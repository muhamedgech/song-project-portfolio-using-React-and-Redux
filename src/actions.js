export const FETCH_SONG = 'FETCH_SONG';
export const FETCH_SONG_SUCCESS = 'FETCH_SONG_SUCCESS';
export const FETCH_SONG_FAILURE = 'FETCH_SONG_FAILURE';

export const ADD_SONG = 'ADD_SONG';
export const ADD_SONG_SUCCESS = 'ADD_SONG_SUCCESS';
export const ADD_SONG_FAILURE = 'ADD_SONG_FAILURE';

export const UPDATE_SONG = 'UPDATE_SONG';
export const UPDATE_SONG_SUCCESS = 'UPDATE_SONG_SUCCESS';
export const UPDATE_SONG_FAILURE = 'UPDATE_SONG_FAILURE';

export const DELETE_SONG = 'DELETE_SONG';
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS';
export const DELETE_SONG_FAILURE = 'DELETE_SONG_FAILURE';
export const SEARCH_SONG_FAILURE='SEARCH_SONG_FAILURE';
export const fetchSong = () => ({
  type: FETCH_SONG,
});

export const fetchSongSuccess = (songs) => ({
  type: FETCH_SONG_SUCCESS,
  payload: songs,
});
export const searchSongFailur = (error) => ({
  type: SEARCH_SONG_FAILURE,
  payload: error,
});


export const fetchSongFailure = (error) => ({
  type: FETCH_SONG_FAILURE,
  payload: error,
});

export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song,
});

export const addSongSuccess = (song) => ({
  type: ADD_SONG_SUCCESS,
  payload: song,
});

export const addSongFailure = (error) => ({
  type: ADD_SONG_FAILURE,
  payload: error,
});

export const updateSong = (song) => ({
  type: UPDATE_SONG,
  payload: song,
});

export const updateSongSuccess = (song) => ({
  type: UPDATE_SONG_SUCCESS,
  payload: song,
});

export const updateSongFailure = (error) => ({
  type: UPDATE_SONG_FAILURE,
  payload: error,
});

export const deleteSong = (id) => ({
  type: DELETE_SONG,
  payload: id,
});

export const deleteSongSuccess = (id) => ({
  type: DELETE_SONG_SUCCESS,
  payload: id,
});

export const deleteSongFailure = (error) => ({
  type: DELETE_SONG_FAILURE,
  payload: error,
});

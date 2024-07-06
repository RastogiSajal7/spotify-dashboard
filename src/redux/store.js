import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './slices/userSlice';
import tokenReducer from './tokenSlice';
import componentReducer from './componentSlice';
// import playlistReducer from './slices/playlistSlice';
// import currentTrackReducer from './slices/currentTrackSlice';
// import currentPlaylistReducer from './slices/currentPlaylistSlice';
// import albumsReducer from './slices/albumsSlice';
// import currentAlbumReducer from './slices/currentAlbumSlice';
// import playerReducer from './slices/playerSlice';
// import componentReducer from './slices/currentComponentSlice';
// import discoverReducer from './slices/discoverSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    component: componentReducer,
    // playlists: playlistReducer,
    // currentTrack: currentTrackReducer,
    // currentPlaylist: currentPlaylistReducer,
    // albums: albumsReducer,
    // currentAlbum: currentAlbumReducer,
    // player: playerReducer,
    // component: componentReducer,
    // discover: discoverReducer,
  },
});

export default store;
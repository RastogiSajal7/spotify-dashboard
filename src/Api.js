import axios from 'axios';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const COUNTRY_CODE = 'IN';
const YEAR = '2023';

export const getTracksReleasedIn2023 = async (token) => {
  if (!token) {
    throw new Error('No access token available');
  }

  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: `year:${YEAR}`,
        type: 'track',
        market: COUNTRY_CODE,
        limit: 50, // Adjust limit as needed
      },
    });
    console.log('API response:', response.data);
    return response.data.tracks.items;
  } catch (error) {
    console.error('Error fetching tracks:', error);
    throw error; // Rethrow the error to propagate it up the call stack
  }
};

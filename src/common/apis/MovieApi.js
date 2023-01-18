import axios from 'axios';

export default axios.create({
  BASE_URL: 'https://www.omdbapi.com',
});

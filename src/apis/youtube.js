import axios from 'axios';

const KEY = 'AIzaSyBKPDXVAGmXkDhxn3FJ4NcgEBSWtbL4kS0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

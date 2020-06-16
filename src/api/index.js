import axios from 'axios';

const baseURL = 'https://47416ff21e01.ngrok.io';

export default axios.create({
  baseURL,
});

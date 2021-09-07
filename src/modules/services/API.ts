import axios from 'axios';

const URL = 'https://wookie.codesubmit.io/movies';

const config = {
  headers: {
    Authorization: 'Bearer Wookie2019',
  },
};

class APIService {
  async getMovies() {
    return axios.get(URL, config);
  }
}

export default new APIService();

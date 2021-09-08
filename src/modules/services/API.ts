import axios, {AxiosResponse} from 'axios';

const URL = 'https://wookie.codesubmit.io/movies';
const SEARCH_QUERY_URL = '?q=';

const config = {
  headers: {
    Authorization: 'Bearer Wookie2019',
  },
};

interface APIInterface {
  getMovies(): Promise<AxiosResponse>;
  queryMovies(query: string): Promise<AxiosResponse>;
}

class APIService implements APIInterface {
  async getMovies() {
    return axios.get(URL, config);
  }
  async queryMovies(query: string) {
    return axios.get(URL + SEARCH_QUERY_URL + query, config);
  }
}

export default new APIService();

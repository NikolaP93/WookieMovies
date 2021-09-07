import axios, {AxiosResponse} from 'axios';

const URL = 'https://wookie.codesubmit.io/movies';
const SEARCH_QUERY_URL = '?q=';

const config = {
  headers: {
    Authorization: 'Bearer Wookie2019',
  },
};

class APIService {
  async getMovies(): Promise<AxiosResponse> {
    return axios.get(URL, config);
  }

  async queryMovies(query: string): Promise<AxiosResponse> {
    return axios.get(URL + SEARCH_QUERY_URL + query, config);
  }
}

export default new APIService();

import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Deals with the local storage of Notes into AsyncStorage
 *
 * @class LocalStorage
 */
class LocalStorage {
  async getFavorite() {
    return AsyncStorage.getItem('favorite').then(json => {
      if (!json) {
        return [];
      }
      return JSON.parse(json || '');
    });
  }

  async setFavorite(movie: string): Promise<void> {
    const storedMovies = await this.getFavorite();
    let arr = [...storedMovies];
    arr.push(movie);
    return AsyncStorage.setItem('favorite', JSON.stringify(arr));
  }

  async deleteFavorite(arr: string[]): Promise<void> {
    return AsyncStorage.setItem('favorite', JSON.stringify(arr));
  }
}

const localStorage = new LocalStorage();
export default localStorage;

import { AsyncStorage } from 'react-native'
import { currentUserStorageKey, } from './Component';

export default class LocalStorage {

  static async getUserName(action) {
    try {
      const data = await AsyncStorage.getItem(currentUserStorageKey);
      const parsedData = JSON.parse(data);
      action(parsedData);
    } catch (error) {
      action(null);
    }
  }

  static async setUserName(value) {
    try {
      await AsyncStorage.setItem(currentUserStorageKey, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }


}

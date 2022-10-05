import AsyncStorage from '@react-native-community/async-storage';

const key = 'intro';

const userDataStorage = {
  async get() {
    try {
      const rawData = await AsyncStorage.getItem(key);
      if (!rawData) {
        throw new Error('no data ' + key);
      }
      const savedData = JSON.parse(rawData);
      return savedData;
    } catch (err) {
      throw new Error('Failed to load ' + key);
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      throw new Error('Failed to save ' + key);
    }
  },
};

export default userDataStorage;

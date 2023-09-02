class LocalStorage {
  static getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  static saveItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const localStorageInstance = Object.freeze(new LocalStorage());

export default localStorageInstance;

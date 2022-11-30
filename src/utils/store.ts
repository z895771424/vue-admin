export interface IData {
  data: any;
  expire?: number;
}

export default {
  set(key: string, data: any, expire?: number): void {
    let cache: IData = { data };
    if (expire) {
      cache.expire = expire * 1000 + new Date().getTime();
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },

  get(key: string) {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache: IData = JSON.parse(cacheStore);
      const expire = cache?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data;
    }
    return null;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  }
};

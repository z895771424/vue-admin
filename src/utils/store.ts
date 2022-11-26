interface IData {
  expire: number;
  [key: string]: any;
}

export default {
  set(key: string, data: IData): void {
    data.expire = data.expire * 1000 + new Date().getTime();
    localStorage.setItem(key, JSON.stringify(data));
  },

  get(key: string): IData | null {
    const item = localStorage.getItem(key);
    if (item) {
      const data: IData = JSON.parse(item);
      const expire = data?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return data;
    }
    return null;
  }
};

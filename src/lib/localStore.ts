export function getStore<T extends any>(key: string): undefined | T {
  if (typeof window === undefined) {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  };
}

export function setStore<T>(key: string, data: T): T {
  if (typeof window !== undefined) {
    const raw = JSON.stringify(data);
    localStorage.setItem(key, raw);
    return data;
  }
  throw new Error("Failed: localStorage");
}

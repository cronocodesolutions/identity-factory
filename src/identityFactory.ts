export default class IdentityFactory {
  private _index = 0;
  private _cache: Record<string, string> = {};

  public getIdentity(key: string): string {
    if (!this._cache[key]) {
      this._cache[key] = this.getByIndex(this._index++);
    }

    return this._cache[key];
  }

  public getByIndex(index: number): string {
    const {first, next} = keyCrumbs;
    const nextIndex = index - first.length;

    if (nextIndex < 0) {
      return first[index];
    }

    const cycles = Math.floor(nextIndex / next.length);
    const symbolIndex = nextIndex - cycles * next.length;

    return this.getByIndex(cycles) + next[symbolIndex];
  }
}

const keyCrumbs = {
  first: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", // 52
  next: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", // 62
};

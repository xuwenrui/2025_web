declare module 'child-adapter/constants' {
  export class Constants {
    static STORAGE_KEY: {
      loginFlag: string;
      userToken: string;
      userId: string;
    };
    static API_ENDPOINTS: {
      baseUrl: string;
      login: string;
      getUser: string;
    };
    static getStorageKey(key: string): string;
  }
}
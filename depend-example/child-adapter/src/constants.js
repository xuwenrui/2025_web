export class Constants {
    static STORAGE_KEY = {
        loginFlag: "loginFlag",
        userToken: "userToken",
        userId: "userId"
    }
    
    static API_ENDPOINTS = {
        baseUrl: "https://api.example.com",
        login: "/auth/login",
        getUser: "/user/profile"
    }
    
    static getStorageKey(key) {
        return `app_${key}`;
    }
}
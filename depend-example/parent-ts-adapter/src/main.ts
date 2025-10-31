// 使用简洁的路径导入constants模块
import { Constants } from 'child-adapter/constants';

console.log('存储键:', Constants.STORAGE_KEY);
console.log('API端点:', Constants.API_ENDPOINTS);
console.log('格式化存储键:', Constants.getStorageKey('test'));
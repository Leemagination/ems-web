import Mock from 'mockjs';
import { environment } from 'src/environments/environment';
const BASE_URL = environment.baseUrl;
const testApi = {
    key1: '@string(4,15)',
    key2: '@integer(0,1000)',
    key3: '@boolean()',
    key4: '@cname()',
    key5: {
        test1: '123',
        test2: 456,
        test3: true,
        test4: [1, 2, '4', '爱爱爱']
    }
};

export const MockMode = () => {
    Mock.mock(`${BASE_URL}/testApi`, 'get', testApi)
}
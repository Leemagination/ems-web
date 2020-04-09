import Mock from 'mockjs';
import { MockStatusError } from '@delon/mock';

const mockRule = {
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
export const delonMock = {
  requestURL: {
    'GET /delonApi': Mock.mock(mockRule),
    'GET /fail401': () => {
      throw  new MockStatusError(401);
    },
    'GET /fail403': () => {
      throw  new MockStatusError(403);
    },
    'GET /fail404': () => {
      throw  new MockStatusError(404);
    },
    'GET /fail500': () => {
      throw  new MockStatusError(500);
    }
  }
};

import {HttpMethod} from '../types';

const createRoute = (path: string, method: HttpMethod = 'get') => ({
  path,
  method,
});

export default createRoute;

import createClient from './client';
import config from '../config';
import apiClient from './apiClient';

var client = apiClient(createClient(config.baseUrl, fetch), config.domain);

export default { client };
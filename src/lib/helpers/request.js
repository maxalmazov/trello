import axios from 'axios';

import config from '../../config';
import providers from '../providers';
import controllers from '../../controllers';

/**
 * Check a request is required API authorization
 */
const isAuthorizationRequired = () => {
  return !providers.globalUserProvider.provide().isAuthorized();
};

/**
 * Check Auth Header for Auth Token
 */
const checkAuthPayload = response => {
  const authData = response.data.accessToken ? response.data : null;

  if (authData) {
    providers.cookiesProvider.setAccessToken(authData);
    providers.cookiesProvider.setRefreshToken(authData);
  }
};

/**
 * Request Wrapper with default success/error action-creators
 */
export const request = (options, withAuth = false) => {
  const onSuccess = response => {
    checkAuthPayload(response);

    return response.data;
  };

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    throw error.response || new Error(error.message);
  };

  // Create an Axios Client with defaults
  const client = axios.create({
    baseURL: config.api.url,
  });

  return client({
    ...options,
    headers: {
      Accept: 'application/ld+json',
      'Content-Type': 'application/ld+json',
      ...providers.headersProvider({ withAuth: withAuth }),
      ...options.headers,
    },
  })
    .then(onSuccess)
    .catch(onError);
};

/**
 * Request Wrapper with required authorization headers
 */
export const authRequest = options => {
  if (isAuthorizationRequired()) {
    return controllers.authorization.refreshToken().then(() => request(options, true));
  }

  return request(options, true);
};

export default {
  request,
  authRequest,
};

import { Cookie } from 'universal-cookie';

import cookiesProvider from './cookies';
import headersProvider from './headers';

interface ProvidersInterface {
  cookies: Cookie;
}

export const initProviders = ({ cookies }: ProvidersInterface): void => {
  cookiesProvider.set(cookies);
};

export default {
  initProviders,
  cookiesProvider,
  headersProvider,
};

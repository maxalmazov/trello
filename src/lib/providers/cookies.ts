import { Cookie } from 'universal-cookie';


const ACCESS_COOKIE = 'react-self_access';
const REFRESH_COOKIE = 'react-self_refresh';
const COOKIE_OPTIONS = {
  path: '/',
  domain: `.${process.env.REACT_APP_DOMAIN}`,
};

export interface AuthInterface {
  accessToken: string;
  accessExpires: string;
}

export interface RefreshTokenInterface {
  refreshToken: string;
  refreshExpires: string;
}

let GLOBAL_COOKIE: Cookie = {
  set: () => {},
  get: () => {},
  remove: () => {},
};

function provide(): Cookie {
  return GLOBAL_COOKIE;
}

function set(cookie: Cookie): void {
  GLOBAL_COOKIE = cookie;
}

function setAccessToken(auth: AuthInterface): void {
  GLOBAL_COOKIE.set(ACCESS_COOKIE, auth.accessToken, {
    expires: new Date(Date.parse(auth.accessExpires)),
    ...COOKIE_OPTIONS,
  });
}

function getAccessToken(): string {
  return GLOBAL_COOKIE.get(ACCESS_COOKIE, { ...COOKIE_OPTIONS });
}

function setRefreshToken(refresh: RefreshTokenInterface): void {
  GLOBAL_COOKIE.set(REFRESH_COOKIE, refresh.refreshToken, {
    expires: new Date(Date.parse(refresh.refreshExpires)),
    ...COOKIE_OPTIONS,
  });
}

export default {
  set,
  provide,
  setAccessToken,
  getAccessToken,
  setRefreshToken,
};

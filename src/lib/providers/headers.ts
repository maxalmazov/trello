import cookiesProvider from './cookies';

interface HeadersProvider {
  withAuth: boolean;
}

export default ({ withAuth }: HeadersProvider) => ({
  ...(withAuth
    ? {
        Authorization: cookiesProvider.getAccessToken(),
      }
    : {}),
});

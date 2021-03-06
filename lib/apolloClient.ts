import { useMemo } from 'react';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

// const fetchHost = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_ORIGIN}/api/get_domain`
//     );
//     return await response.json();
//   } catch (error) {
//     console.log('error', error);
//     return { host: '' };
//   }
// };

const createApolloClient = (initialState = {}) => {
  // console.log('test0');
  // const host = await fetchHost();
  // console.log('uri is:', `${host.host}${process.env.NEXT_PUBLIC_GRAPHQL_URL}`);
  // console.log('test1');
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: createHttpLink({
      uri: `${process.env.NEXT_PUBLIC_ORIGIN}${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
};

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ? apolloClient : createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

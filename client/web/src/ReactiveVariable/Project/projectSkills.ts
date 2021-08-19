import { InMemoryCache } from '@apollo/client/cache';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getProjectSkills() {
          return projectSkills();
        },
      },
    },
  },
});

export const projectSkills = cache.makeVar<string[]>([]);
export const projectSortedBy = cache.makeVar<string>('');

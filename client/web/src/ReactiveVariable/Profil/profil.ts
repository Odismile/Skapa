import { makeVar } from '@apollo/client/cache';

// Create Reactive variable
export const yourPosition = makeVar<string>('');
export const nameOfOrganisation = makeVar<string>('');
export const ageProfil = makeVar<string>('');
export const levelLanguages = makeVar([
  {
    id: '',
    title: '',
    name: '',
    level: '',
  },
]);

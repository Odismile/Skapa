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

export const pictureFile = makeVar<string>('');
export const videoFile = makeVar<string>('');
export const bio = makeVar<string>('');

export const skills = makeVar<string[]>([]);
export const projectsType = makeVar<string[]>([]);

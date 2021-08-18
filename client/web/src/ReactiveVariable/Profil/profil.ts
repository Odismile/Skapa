import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

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
export const languageSelectVariable = makeVar<(string | null)[] | null | undefined>([]);

export const pictureFile = makeVar<string>('');
export const videoFile = makeVar<string>('');
export const bio = makeVar<string>('');

export const skillsSelectedVariable = makeVar<(Items_get_language_items | null)[] | null | undefined>(null);
export const projectsTypeSelectedVariable = makeVar<(Items_get_language_items | null)[] | null | undefined>(null);

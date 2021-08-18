import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

export interface Language {
  id: string;
  title: string;
  name: string;
  level: string;
}
// Create Reactive variable
export const yourPosition = makeVar<string>('');
export const nameOfOrganisation = makeVar<string>('');
export const ageProfil = makeVar<string>('');
export const levelLanguages = makeVar<Language[] | null>(null);

export const pictureFile = makeVar<string>('');
export const videoFile = makeVar<string>('');
export const bio = makeVar<string>('');

export const skillsSelectedVariable = makeVar<string[] | null>(null);
export const projectsTypeSelectedVariable = makeVar<string[] | null>(null);

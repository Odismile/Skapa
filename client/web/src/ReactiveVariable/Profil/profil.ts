import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

export interface Language {
  id: string;
  title: string;
  name: string;
  level: string;
}
// Create Reactive variable
export const yourPosition = makeVar<string | null>(null);
export const nameOfOrganisation = makeVar<string | null>(null);
export const ageProfil = makeVar<string | null>(null);
export const levelLanguages = makeVar<Language[] | null>(null);

export const pictureFile = makeVar<File[] | null>(null);
export const videoFile = makeVar<File[] | null>(null);
export const bio = makeVar<string>('');

export const skillsSelectedVariable = makeVar<(Items_get_language_items | null)[] | null | undefined>(null);
export const projectsTypeSelectedVariable = makeVar<(Items_get_language_items | null)[] | null | undefined>(null);

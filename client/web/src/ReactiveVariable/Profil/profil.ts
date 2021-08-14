import { makeVar } from '@apollo/client/cache';

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
export const levelLanguages = makeVar<Language[]>([]);

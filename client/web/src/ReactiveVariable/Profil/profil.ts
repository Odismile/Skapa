import { makeVar } from '@apollo/client/cache';

export interface Language {
  id: string;
  title: string;
  name: string;
  level: string;
}
// Create Reactive variable
//Profil
export const yourPosition = makeVar<string>('');
export const nameOfOrganisation = makeVar<string>('');
export const ageProfil = makeVar<string>('');
export const levelLanguages = makeVar<Language[]>([]);

//Profil2
export const yousPicture = makeVar<string>('');
export const yourVideo = makeVar<string>('');
export const yourBio = makeVar<string>('');

//Profil3
export const yourSkills = makeVar<string[]>([]);

//Profil4
export const projectType = makeVar<string[]>([]);

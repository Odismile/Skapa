import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

// Create Reactive variable
export const nameProjectVariable = makeVar<string>('');
export const filesPictureVariable = makeVar<File[] | null>(null);
export const typeProjectVariable = makeVar<string>('Change');
export const cityVariable = makeVar<string>('');
export const dateStartVariable = makeVar<Date | null>(new Date());
export const dateEndVariable = makeVar<Date | null>(new Date());
export const projectDescriptionVariable = makeVar<string>('');
export const skillsSelectedVariable = makeVar<(Items_get_language_items | null)[] | null | undefined>(null);
export const filesVideoVariable = makeVar<File[] | null>(null);

export const projectIdVariable = makeVar<string>('');

export const initCreateProjectVariable = () => {
  nameProjectVariable('');
  filesPictureVariable(null);
  typeProjectVariable('');
  cityVariable('');
  dateStartVariable(null);
  dateEndVariable(null);
  projectDescriptionVariable('');
  skillsSelectedVariable(null);
  filesVideoVariable(null);
};

export const testCreateObject = () => {
  if (
    filesPictureVariable() === null ||
    typeProjectVariable().trim().length === 0 ||
    cityVariable().trim().length === 0 ||
    dateStartVariable() === null ||
    dateEndVariable() === null ||
    projectDescriptionVariable().trim().length === 0 ||
    skillsSelectedVariable() === null ||
    filesVideoVariable() === null
  ) {
    return true;
  }
  return false;
};

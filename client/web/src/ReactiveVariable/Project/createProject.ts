import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

// Create Reactive variable
export const filesPictureVariable = makeVar<File[] | null>(null);
export const typeProjectVariable = makeVar<string>('');
export const cityVariable = makeVar<string>('');
export const dateStartVariable = makeVar<Date | null>(null);
export const dateEndVariable = makeVar<Date | null>(null);
export const projectDescription = makeVar<string>('');
export const skillsSelectedVariable = makeVar<(Items_get_language_items | null)[] | null | undefined>(null);
export const filesVideoVariable = makeVar<File[] | null>(null);

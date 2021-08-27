import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

export interface languageItem extends Items_get_language_items {
  level: string;
}

interface filterTalentInterface {
  search: string;
  isTopRated: boolean;
  isRecommended: boolean;
  isSenior: boolean;
  isJunior: boolean;
  minDailyRate: number;
  maxDailyRate: number;
  skills: Items_get_language_items[];
  levels: Items_get_language_items[];
  languages: languageItem[];
}
// Create Reactive variable
export const filterTalentVar = makeVar<filterTalentInterface>({
  search: '',
  isJunior: false,
  isRecommended: false,
  isSenior: false,
  isTopRated: false,
  maxDailyRate: 500,
  minDailyRate: 20,
  skills: [],
  levels: [],
  languages: [],
});

export const juniorValues = ['0 - 3 yrs'];
export const seniorValues = ['3 - 8 yrs', '> 8 yrs'];

import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

interface filterTalentInterface {
  search: string;
  isTopRated: boolean;
  isRecommended: boolean;
  isSenior: boolean;
  isJunior: boolean;
  minDailyRate: number;
  maxDailyRate: number;
  skills: Items_get_language_items[];
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
});

import { Items_get_language_items } from '../GraphQL/items/types/Items_get_language';

export const transformSkills = (skills: (Items_get_language_items | null)[] | null | undefined) => {
  const data: string[] = [];
  if (skills) {
    for (const skill of skills) {
      data.push(skill?.id ?? '');
    }
    return data;
  } else {
    return [];
  }
};

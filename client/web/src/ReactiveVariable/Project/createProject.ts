import { makeVar } from '@apollo/client/cache';
import { Items_get_language_items } from '../../GraphQL/items/types/Items_get_language';

interface CreateProjectInputInterface {
  pictureProject: File[] | null;
  videoProject: File[] | null;
  nameProject: string;
  videoUrl: string;
  typeProject: string;
  cityProject: string;
  descriptionProject: string;
  isExternalVideo: boolean;
  dateStartProject: Date | null;
  dateEndProject: Date | null;
  skillsSelectedVariable: (Items_get_language_items | null)[] | null | undefined;
}
// Create Reactive variable
export const createProjectInputVar= makeVar<CreateProjectInputInterface>({
  cityProject: '',
  dateEndProject: new Date(),
  dateStartProject: new Date(),
  pictureProject: null,
  videoProject: null,
  nameProject: '',
  videoUrl: '',
  isExternalVideo : false,
  skillsSelectedVariable: [],
  descriptionProject: '',
  typeProject: 'Change',
});

export const projectIdVariable = makeVar<string>('');

export const initCreateProjectVariable = () => {
  createProjectInputVar({
    cityProject: '',
    dateEndProject: new Date(),
    dateStartProject: new Date(),
    pictureProject: null,
    videoProject: null,
    nameProject: '',
    videoUrl: '',
    isExternalVideo: false,
    skillsSelectedVariable: [],
    descriptionProject: '',
    typeProject: 'Change',
  });
};

export const testCreateObject = () => {
  const input = createProjectInputVar();
  if (
    input.pictureProject === null ||
    input.typeProject.trim().length === 0 ||
    input.cityProject.trim().length === 0 ||
    input.dateStartProject === null ||
    input.dateEndProject === null ||
    input.descriptionProject.trim().length === 0 ||
    input.skillsSelectedVariable === null ||
    input.videoProject === null
  ) {
    return true;
  }
  return false;
};

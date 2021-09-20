import { RouteInterface } from '../Interfaces/Route';
import Wrapper from '../Components/Wrapper';
import HomePage from '../Containers/HomePage';
import Login from '../Containers/Authentication/Login';
import Signup from '../Containers/Authentication/Signup';
import Onboarding from '../Containers/Onboarding';
import OnboardingStart from '../Containers/OnboardingStart';
import OnboardingProfile from '../Containers/OnboardingProfile';
import OnboardingProfileTwo from '../Containers/OnboardingProfileTwo/OnboardingProfileTwo';
import OnboardingProfileSix from '../Containers/OnboardingProfileSix/OnboardingProfileSix';
import Project from '../Containers/Project';
import CreateProject from '../Containers/Project/CreateProject';
import ProjectPlaces from '../Containers/Places/Places';
import ProjectFichePlaces from '../Containers/Project/FichePlaces/FichePlaces';
import CreateProjectCongrats from '../Containers/Project/CreateProject/Congrats';
import OnboardingProfileThree from '../Containers/OnboardingProfileThree/OnboardingProfileThree';
import OnboardingProfileFour from '../Containers/OnboardingProfileFour/OnboardingProfileFour';
import OnboardingProfileSeven from '../Containers/OnboardingProfileSeven/OnboardingProfileSeven';
import OnboardingSplashScreen from '../Containers/OnboardingSplashScreen/OnboardingSplashScreen';
import DetailsTalents from '../Containers/DetailsTalents/DetailsTalents';
import DetailsPlace from '../Containers/DetailsPlace/DetailsPlace';
import DetailsProjects from '../Containers/DetailsProjects/DetailsProjects';
import Wishlist from '../Containers/Wishlist/Wishlist';
import Coachs from '../Containers/Coachs/Coachs';
import Profile from '../Containers/Profile/Profile';
import MyActivity from '../Containers/MyActivity/MyActivity';
import ContributeSpace from '../Containers/MyActivity/ContributeSpace/ContributeSpace';
import TalentSpace from '../Containers/MyActivity/TalentSpace/TalentSpace';
import CreatorSpace from '../Containers/MyActivity/CreatorSpace/CreatorSpace';
import AppExterne from '../Containers/AppExterne/AppExterne';
import Admin from '../Containers/Admin';
import ProjectsAdmin from '../Containers/Admin/ProjectsAdmin';

export const HOMEPAGE = '/';
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const ONBOARDING = '/onboarding';
export const ONBOARDING_START = '/onboarding-start';
export const ONBOARDING_PROFILE = '/onboarding-profile';
export const ONBOARDING_PROFILE2 = '/onboarding-profile2';
export const ONBOARDING_PROFILE6 = '/onboarding-profile6';
export const PROJECT = '/project';
export const TALENT = '/talent';
export const PLACE = '/place';
export const PROJECT_PLACES = '/project/places';
export const PROJECT_FICHES_PLACES = '/project/FichePlaces';
export const CREATE_PROJECT = '/project/create-project';
export const CREATE_PROJECT_CONGRATS = '/project/create-project/congrats';
export const ONBOARDING_PROFILE3 = '/onboarding-profile3';
export const ONBOARDING_PROFILE4 = '/onboarding-profile4';
export const ONBOARDING_PROFILE7 = '/onboarding-splashscreen1';
export const ONBOARDING_SPLASHSCREEN = '/onboarding-splashscreen2';
export const DETAILS_TALENTS = '/details-talents/:talentId';
export const DETAILS_PLACE = '/details-place';
export const DETAILS_PROJECTS = '/project/:projectId/profil/:profilId';
export const WISHLIST = '/wishlist';
export const COACHS = '/coachs';
export const MYACTIVITY = '/myactivity';
export const MYACTIVITY_CONTRIBUTE_SPACE = '/myactivity/contribute';
export const MYACTIVITY_TALENT_SPACE = '/myactivity/talent';
export const MYACTIVITY_CREATOR_SPACE = '/myactivity/creator';
export const PROFILE = '/profile';
export const APPEXTERNE = '/app-externe';
export const ADMIN = '/admin';
//export const ADMIN = '/admin';
export const UNAUTHORIZED = '/unauthorized';

const WrappedHomePage = Wrapper(HomePage);

export const ROUTES: RouteInterface[] = [
  {
    key: 'ADMIN',
    route: ADMIN,
    roles: [],
    private: true,
    component: ProjectsAdmin,
  },
  {
    key: 'APPEXTERNE',
    route: APPEXTERNE,
    roles: [],
    private: true,
    component: AppExterne,
  },
  {
    key: 'COACHS',
    route: COACHS,
    roles: [],
    private: true,
    component: Coachs,
  },
  {
    key: 'HOMEPAGE',
    route: HOMEPAGE,
    roles: [],
    private: true,
    component: WrappedHomePage,
  },
  {
    key: 'LOGIN',
    route: LOGIN,
    roles: [],
    private: false,
    component: Login,
  },
  {
    key: 'SIGNUP',
    route: SIGNUP,
    roles: [],
    private: false,
    component: Signup,
  },
  {
    key: 'ONBOARDING',
    route: ONBOARDING,
    roles: [],
    private: false,
    component: Onboarding,
  },
  {
    key: 'ONBOARDING_START',
    route: ONBOARDING_START,
    roles: [],
    private: false,
    component: OnboardingStart,
  },
  {
    key: 'ONBOARDING_PROFILE',
    route: ONBOARDING_PROFILE,
    roles: [],
    private: false,
    component: OnboardingProfile,
  },
  {
    key: 'PROJECT',
    route: [PROJECT, TALENT, PLACE],
    roles: [],
    private: true,
    component: Project,
  },
  {
    key: 'CREATE_PROJECT',
    route: CREATE_PROJECT,
    roles: [],
    private: true,
    component: CreateProject,
  },
  {
    key: 'PROJECT_PLACES',
    route: PROJECT_PLACES,
    roles: [],
    private: true,
    component: ProjectPlaces,
  },
  {
    key: 'PROJECT_FICHES_PLACES',
    route: PROJECT_FICHES_PLACES,
    roles: [],
    private: false,
    component: ProjectFichePlaces,
  },
  {
    key: 'ONBOARDING_PROFILE6',
    route: ONBOARDING_PROFILE6,
    roles: [],
    private: false,
    component: OnboardingProfileSix,
  },
  {
    key: 'ONBOARDING_PROFILE3',
    route: ONBOARDING_PROFILE3,
    roles: [],
    private: false,
    component: OnboardingProfileThree,
  },
  {
    key: 'ONBOARDING_PROFILE4',
    route: ONBOARDING_PROFILE4,
    roles: [],
    private: false,
    component: OnboardingProfileFour,
  },
  {
    key: 'ONBOARDING_PROFILE2',
    route: ONBOARDING_PROFILE2,
    roles: [],
    private: false,
    component: OnboardingProfileTwo,
  },
  {
    key: 'ONBOARDING_PROFILE7',
    route: ONBOARDING_PROFILE7,
    roles: [],
    private: false,
    component: OnboardingProfileSeven,
  },
  {
    key: 'ONBOARDING_SPLASHSCREEN',
    route: ONBOARDING_SPLASHSCREEN,
    roles: [],
    private: false,
    component: OnboardingSplashScreen,
  },
  {
    key: 'CREATE_PROJECT_CONGRATS',
    route: CREATE_PROJECT_CONGRATS,
    roles: [],
    private: false,
    component: CreateProjectCongrats,
  },
  {
    key: 'DETAILS_TALENTS',
    route: DETAILS_TALENTS,
    roles: [],
    private: false,
    component: DetailsTalents,
  },
  {
    key: 'DETAILS_PLACE',
    route: DETAILS_PLACE,
    roles: [],
    private: false,
    component: DetailsPlace,
  },
  {
    key: 'DETAILS_PROJECTS',
    route: DETAILS_PROJECTS,
    roles: [],
    private: false,
    component: DetailsProjects,
  },
  {
    key: 'WISHLIST',
    route: WISHLIST,
    roles: [],
    private: false,
    component: Wishlist,
  },
  {
    key: 'PROFILE',
    route: PROFILE,
    roles: [],
    private: false,
    component: Profile,
  },
  {
    key: 'MYACTIVITY',
    route: MYACTIVITY,
    roles: [],
    private: false,
    component: MyActivity,
  },
  {
    key: 'MYACTIVITY_CONTRIBUTE_SPACE',
    route: MYACTIVITY_CONTRIBUTE_SPACE,
    roles: [],
    private: false,
    component: ContributeSpace,
  },
  {
    key: 'MYACTIVITY_TALENT_SPACE',
    route: MYACTIVITY_TALENT_SPACE,
    roles: [],
    private: false,
    component: TalentSpace,
  },
  {
    key: 'MYACTIVITY_CREATOR_SPACE',
    route: MYACTIVITY_CREATOR_SPACE,
    roles: [],
    private: false,
    component: CreatorSpace,
  },
];

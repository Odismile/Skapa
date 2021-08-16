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
import ProjectPlaces from '../Containers/Places/FichePlaces/FichePlaces';
import CreateProjectCongrats from '../Containers/Project/CreateProject/Congrats';
import OnboardingProfileThree from '../Containers/OnboardingProfileThree/OnboardingProfileThree';
import OnboardingProfileFour from '../Containers/OnboardingProfileFour/OnboardingProfileFour';
import OnboardingProfileSeven from '../Containers/OnboardingProfileSeven/OnboardingProfileSeven';
import OnboardingSplashScreen from '../Containers/OnboardingSplashScreen/OnboardingSplashScreen';
import DetailsTalents from '../Containers/DetailsTalents/DetailsTalents';

export const HOMEPAGE = '/';
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const ONBOARDING = '/onboarding';
export const ONBOARDING_START = '/onboarding-start';
export const ONBOARDING_PROFILE = '/onboarding-profile';
export const ONBOARDING_PROFILE2 = '/onboarding-profile2';
export const ONBOARDING_PROFILE6 = '/onboarding-profile6';
export const PROJECT = '/project';
export const PROJECT_PLACES = '/project/places';
export const CREATE_PROJECT = '/project/create-project';
export const CREATE_PROJECT_CONGRATS = '/project/create-project/congrats';
export const ONBOARDING_PROFILE3 = '/onboarding-profile3';
export const ONBOARDING_PROFILE4 = '/onboarding-profile4';
export const ONBOARDING_PROFILE7 = '/onboarding-splashscreen1';
export const ONBOARDING_SPLASHSCREEN = '/onboarding-splashscreen2';
export const DETAILS_TALENTS = '/details-talents';
export const UNAUTHORIZED = '/unauthorized';

const WrappedHomePage = Wrapper(HomePage);

export const ROUTES: RouteInterface[] = [
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
    route: PROJECT,
    roles: [],
    private: false,
    component: Project,
  },
  {
    key: 'CREATE_PROJECT',
    route: CREATE_PROJECT,
    roles: [],
    private: false,
    component: CreateProject,
  },
  {
    key: 'PROJECT_PLACES',
    route: PROJECT_PLACES,
    roles: [],
    private: false,
    component: ProjectPlaces,
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
];

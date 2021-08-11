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

export const HOMEPAGE = '/';
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const ONBOARDING = '/onboarding';
export const ONBOARDING_START = '/onboarding-start';
export const ONBOARDING_PROFILE = '/onboarding-profile';
export const ONBOARDING_PROFILE2 = '/onboarding-profile2';
export const ONBOARDING_PROFILE6 = '/onboarding-profile6';
export const UNAUTHORIZED = '/unauthorized';

const WrappedHomePage = Wrapper(HomePage);

export const ROUTES: RouteInterface[] = [
  {
    key: 'HOMEPAGE',
    route: HOMEPAGE,
    roles: [],
    private: false,
    component: WrappedHomePage,
  },
  {
    key: 'HOMEPAGE',
    route: HOMEPAGE,
    roles: [],
    private: false,
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
    key: 'ONBOARDING_PROFILE2',
    route: ONBOARDING_PROFILE2,
    roles: [],
    private: false,
    component: OnboardingProfileTwo,
  },
  {
    key: 'ONBOARDING_PROFILE6',
    route: ONBOARDING_PROFILE6,
    roles: [],
    private: false,
    component: OnboardingProfileSix,
  },
];

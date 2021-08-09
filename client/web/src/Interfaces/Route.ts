export interface RouteInterface {
  key: string;
  route: string | string[];
  roles: string[];
  private: boolean;
  isAccessGranted?: boolean;
  component: (() => JSX.Element) | any;
}

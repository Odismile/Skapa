import gql from 'graphql-tag';
import { USER_PERMISSION_ME_FRAGMENT } from '../user/fragment';

export const LOGIN = gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      jwt
      user {
        ...UserPermissionMeInfo
      }
    }
  }
  ${USER_PERMISSION_ME_FRAGMENT}
`;

export const REGISTER = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        ...UserPermissionMeInfo
      }
    }
  }
  ${USER_PERMISSION_ME_FRAGMENT}
`;

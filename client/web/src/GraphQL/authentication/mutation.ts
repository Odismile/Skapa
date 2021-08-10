import gql from 'graphql-tag';
import { USER_PERMISSION_ME_FRAGMENT } from '../user/fragment';

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
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

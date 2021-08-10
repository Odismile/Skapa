import gql from 'graphql-tag';
import { USER_PERMISSION_ME_FRAGMENT } from '../user/fragment';

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        ...UserPermissionMeInfo
      }
    }
  }
  ${USER_PERMISSION_ME_FRAGMENT}
`;

export const REGISTER = gql`
  mutation Register($input: UsersPermissionsRegisterCustomInput!) {
    registerCustom(input: $input) {
      jwt
      user {
        ...UserPermissionMeInfo
      }
    }
  }
  ${USER_PERMISSION_ME_FRAGMENT}
`;

export const EMAIL_CONFIRMATION = gql`
  mutation EmailConfirmation($confirmation: String!) {
    registerCustom(confirmation: $confirmation) {
      jwt
      user {
        ...UserPermissionMeInfo
      }
    }
  }
  ${USER_PERMISSION_ME_FRAGMENT}
`;

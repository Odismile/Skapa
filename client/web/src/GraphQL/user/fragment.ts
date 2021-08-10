import gql from 'graphql-tag';

export const USER_PERMISSION_ME_ROLE_FRAGMENT = gql`
  fragment UserPermissionMeRoleInfo on UsersPermissionsMeRole {
    id
    name
    description
    type
  }
`;

export const USER_PERMISSION_ME_FRAGMENT = gql`
  fragment UserPermissionMeInfo on UsersPermissionsMe {
    username
    email
    confirmed
    blocked
    role {
      ...UserPermissionMeRoleInfo
    }
  }
  ${USER_PERMISSION_ME_ROLE_FRAGMENT}
`;

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
    id
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

export const USER_PERMISSION_CUSTOM_ME_FRAGMENT = gql`
  fragment UserPermissionMeInfoCustom on UsersPermissionsCustomizeMe {
    id
    username
    email
    confirmed
    blocked
    isFirstConnection
    role {
      ...UserPermissionMeRoleInfo
    }
  }
  ${USER_PERMISSION_ME_ROLE_FRAGMENT}
`;

import gql from 'graphql-tag';
import { USER_PERMISSION_ME_ROLE_FRAGMENT } from './fragment';

export const ME_INFO = gql`
  query MeInfo($id: ID!, $publicationState: PublicationState) {
    user(id: $id, publicationState: $publicationState) {
      ...UserPermissionMeInfoCustom
    }
  }
  ${USER_PERMISSION_ME_ROLE_FRAGMENT}
`;

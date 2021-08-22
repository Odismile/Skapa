import gql from 'graphql-tag';

export const CREATE_CONTROBUTE = gql`
  mutation createContribute($input: createContributeInput) {
    createContribute(input: $input) {
      contribute {
        id
      }
    }
  }
`;

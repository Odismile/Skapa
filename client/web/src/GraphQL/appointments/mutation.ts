import gql from 'graphql-tag';

export const CREATE_APPOINTMENT = gql`
  mutation createAppointment($input: createAppointmentInput) {
    createAppointment(input: $input) {
      appointment {
        id
      }
    }
  }
`;

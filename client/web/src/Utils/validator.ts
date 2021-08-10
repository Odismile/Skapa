export const isEmailValid = (email: string): boolean => {
  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return email !== undefined && regexEmail.test(email.trim());
};

// password validation
export const isPassHasMinMaxLength = (password: string) => {
  const regexMinMaxLength = /^[\s\S]{8,}$/;
  return regexMinMaxLength.test(password.trim());
};

export const isPassHasUpper = (password: string) => {
  const regexUpper = /[A-Z]/;
  return regexUpper.test(password.trim());
};

export const isPassHasLower = (password: string) => {
  const regexLower = /[a-z]/;
  return regexLower.test(password.trim());
};

export const isPassHasNumber = (password: string) => {
  const regexNumber = /[0-9]/;
  return regexNumber.test(password.trim());
};

export const isPassValid = (password: string) => {
  return (
    isPassHasMinMaxLength(password) && isPassHasUpper(password) && isPassHasLower(password) && isPassHasNumber(password)
  );
};

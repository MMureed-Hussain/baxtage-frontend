export const checkEmailIsValid = (value) => {
  const emailRegExp = /^(([\w _+-]+(\.[\w _+-]+)*)|(".+"))@(([\w _+-]+\.)+[\w _+-]{2,})$/i;
  return emailRegExp.test(value);
};

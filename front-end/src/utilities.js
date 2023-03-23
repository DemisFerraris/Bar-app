export const PASSWORD_PATTERN = new RegExp('^(?=.*\\d)(?=.*[A-Z]).{6,20}$');

export const EMAIL_PATTERN = new RegExp(
  '^(?=.{1,64}@)[A-Za-z0-9\\+_-]+(\\.[A-Za-z0-9\\+_-]+)*@' +
    '[^-][A-Za-z0-9\\+-]+(\\.[A-Za-z0-9\\+-]+)*(\\.[A-Za-z]{2,})$'
);

export const TogglePasswordVisibility = () => {
  let input = document.getElementById('password');
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
};

export const formFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
  },
];

export const authErrors = [
  {
    code: 'member_not_found',
    message:
      'Your email is not registered in our system. Please contact your administrator.',
  },
  {
    code: 'default',
    message: 'An error occurred during login. Please try again.',
  },
  {
    code: 'unauthorized',
    message: 'You are not authorized to access this resource.',
  },
  {
    code: 'access_denied',
    message: "Access denied. You don't have permission to log in.",
  },
];

export const getErrorMessage = (code: string): string => {
  const error = authErrors.find((error) => error.code === code);
  return (
    error?.message ||
    authErrors.find((error) => error.code === 'default')?.message ||
    ''
  );
};

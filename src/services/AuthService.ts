import AuthAPI from './AuthAPI';

const AuthService = {
  login: (email: string, password: string) => AuthAPI.post('users/login', { email, password }),
  register: (email: string, password: string, firstName: string, lastName: string) =>
    AuthAPI.post('users/register', { email, password, firstName, lastName })
};

export default AuthService;

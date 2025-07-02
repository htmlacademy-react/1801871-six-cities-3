import { FormEvent, useEffect, useRef, useState } from 'react';
import { loginAction } from '../../store/api-action';

import ErrorText from '../../components/error-text/error-text';

import { useAppDispatch, useAppSelector} from '../../store/hooks';
import { AppRoute, AuthState } from '../../const';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../types/endpoint';
import { deleteCookie, getCookie } from '../../coockies/coockies';


function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authStatus = useAppSelector((state)=> state.auth.authStatus);
  const errorData = useAppSelector((state)=> state.error.errorData);

  const [error, SetError] = useState<string | null>(null);

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (authStatus === AuthState.Auth) {
      const lastRoute = getCookie('lastRoute');
      if (lastRoute) {
        deleteCookie('lastRoute');
        navigate(lastRoute);
      } else {
        navigate(AppRoute.Root);
      }
    }
  }, [authStatus, navigate]);

  function isFieldsValid (login:string, password:string):boolean {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{4,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return passwordRegex.test(password) && emailRegex.test(login);
  }

  function handleAuthSubmit (evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const login = loginRef.current.value;
      const password = passwordRef.current.value;

      if(!isFieldsValid(login, password)){
        SetError('Данные не валидны, убедитесь, что в пароле есть заглавная буква и цифра, а почта валидна');
        return;
      }
      SetError(null);
      dispatch(loginAction({ login, password}));
    }
  }

  function showHideError(field:string) {
    if(errorData?.path !== ENDPOINTS.login) {
      return;
    }

    const err = errorData.data?.find((data)=> data.field === field);

    return err && <ErrorText errorText={err.messages.join(' ')} />;
  }

  // if (authStatus === AuthState.Auth) {
  //   const lastRoute = getCookie('lastRoute');
  //   console.log(lastRoute);

  //   if (lastRoute) {
  //     deleteCookie('lastRoute');
  //     console.log(lastRoute);
  //     return <Navigate to={lastRoute} />;
  //   }

  //   console.log('root');
  //   return <Navigate to={AppRoute.Root} />;
  // }

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleAuthSubmit}
            >

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              {showHideError('email')}

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              {showHideError('password')}
              {error && <ErrorText errorText={error} />}

              <button className="login__submit form__submit button" type="submit">
            Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;


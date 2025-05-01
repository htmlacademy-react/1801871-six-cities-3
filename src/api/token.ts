import { TOKEN_KEY_NAME } from '../const';

export function setToken (token:string) {
  localStorage.setItem(TOKEN_KEY_NAME, token);
}

export function getToken () {
  return localStorage.getItem(TOKEN_KEY_NAME) ?? '';
}

export function deleteToken () {
  localStorage.removeItem(TOKEN_KEY_NAME);
}

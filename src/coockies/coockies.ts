import { TRoute } from '../types/endpoint';

type TCookieName = 'lastRoute';


export function getCookie(name: TCookieName): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${ name }=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export function setCookie(name: TCookieName, value: TRoute | '', hours?: number): void {
  let expires = '';
  if (hours) {
    const date = new Date();
    date.setTime(date.getTime() + hours * 3600 * 1000);
    expires = `; expires=${ date.toUTCString()}`;
  }
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/`;
}

export function deleteCookie(name: TCookieName): void {
  setCookie(name, '', -1);
}

import Cookies from 'js-cookie';
export const getCookie = (key: string) => {
  return Cookies.get(key);
};
export const setCookie = (key:string, value:string, time: number = 100000) => {
  let seconds = time;
  let expires = new Date(new Date() * 1 + seconds * 1000);
  return Cookies.set(key, value, { expires: expires });
};
export const removeCookies  = (key: string) => {
  return Cookies.remove(key)
 }

import { mount } from './mount';

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#react-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export {
  mount
}
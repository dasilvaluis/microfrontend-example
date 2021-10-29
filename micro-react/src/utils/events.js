export function triggerEvent(type, data) {
  const event = new CustomEvent(`react-mfe/${ type }`, {
    detail: { payload: data }
  });

  window.dispatchEvent(event)
}
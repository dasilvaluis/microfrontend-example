export function triggerEvent(type, data) {
  const event = new CustomEvent(`vue-mfe/${ type }`, {
    detail: { payload: data }
  });

  window.dispatchEvent(event)
}
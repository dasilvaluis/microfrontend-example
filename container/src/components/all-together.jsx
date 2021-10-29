import React, { useRef, useEffect, useState } from 'react';
import { mount as mountVueApp } from 'MFEVue';

const MFEReact_Counter = React.lazy(
  () => import('MFEReact/counter')
);

export default function AllTogether() {
  const vueAppRef = useRef(null);
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    function logEvent(e) {
      setTotal((prev) => prev + e.detail.payload.step);
    }

    window.addEventListener('react-mfe/countChange', logEvent);
    window.addEventListener('vue-mfe/countChange', logEvent);

    return () => {
      window.removeEventListener('react-mfe/countChange', logEvent);
      window.removeEventListener('vue-mfe/countChange', logEvent);
    }
  }, []);

  useEffect(() => {
    mountVueApp(vueAppRef.current);
  }, [])

  return (
    <React.Fragment>
      <div>{`Total: ${total}`}</div>
      <React.Suspense fallback='Loading React Counter'>
        <MFEReact_Counter />
      </React.Suspense>
      <hr/>
      <div ref={vueAppRef} />
    </React.Fragment>
  );
}

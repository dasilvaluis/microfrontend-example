import React, { useRef, useEffect } from 'react';
import { mount } from 'MFEVue';

export default function VueAppRoot() {
  const ref = useRef(null);

  useEffect(() => {
    function loadModule() {
      mount(ref.current);
    }

    loadModule();
  }, [])

  return <div ref={ref} />;
}

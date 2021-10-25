import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'MFEReact';

export default function ReactCounterRoot() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    function loadModule() {
      const { onParentNavigate } = mount(ref.current, '/react');
      history.listen(onParentNavigate);
    }

    loadModule();
  }, [])

  return <div ref={ref} />;
}

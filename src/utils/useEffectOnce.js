import React from "react";

const useEffectOnce = (callback, dep) => {
  const effectCalled = React.useRef(false);
  if (!dep) {
    dep = [];
  }
  React.useEffect(() => {
    if (dep && !effectCalled.current) {
      callback();
      effectCalled.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dep]);
};

export default useEffectOnce;

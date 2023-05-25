import React, { useCallback, useEffect, useMemo, useState } from 'react';

const useAsyncAction = (fn, deps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const callback = useCallback((...args) => {
    setIsLoading(true);

    return fn(...args)
      .then((r) => {
        setData(r);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  }, deps);

  return [callback, isLoading, data, error];
};

export default useAsyncAction;

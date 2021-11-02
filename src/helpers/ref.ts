/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

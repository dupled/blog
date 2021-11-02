/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

type Component = React.FC<any> | React.LazyExoticComponent<React.FC<any>>;

export interface IRoute {
  path: string;
  exact: boolean;
  component: Component;
}

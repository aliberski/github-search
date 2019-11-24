import React, { ReactType } from 'react';
import { IProps } from './types';

export const withPaginationPages = (Component: ReactType) => (
  props: IProps,
) => {
  const { data, rowsPerPage } = props;
  const len = data && data.length;
  const paginationPages = len > 0 ? Math.ceil(data.length / rowsPerPage) : 1;
  return <Component {...props} paginationPages={paginationPages} />;
};

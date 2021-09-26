/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import SuspenseFallback from "components/structure/SuspenseFallback";

const WithSuspense = (WrappedComponent: React.LazyExoticComponent<any>) => ({ loadComponent, ...otherProps }: any) => {
  if (!loadComponent) return null;

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <WrappedComponent {...otherProps} />
    </Suspense>
  );
};

export default WithSuspense;

import React, { Suspense, useEffect } from 'react';
import PageLoader from './PageLoader';

/**
 * LazyRoute wrapper component with additional optimizations
 * Handles route-level lazy loading with preloading capabilities
 */
const LazyRoute = ({ 
  children, 
  fallback = <PageLoader />, 
  preloadOnHover = true,
  routeName = ''
}) => {
  
  useEffect(() => {
    // Add performance mark for route loading
    if (routeName) {
      performance.mark(`route-${routeName}-start`);
    }
    
    return () => {
      if (routeName) {
        performance.mark(`route-${routeName}-end`);
        performance.measure(
          `route-${routeName}-duration`,
          `route-${routeName}-start`,
          `route-${routeName}-end`
        );
      }
    };
  }, [routeName]);

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

/**
 * Higher-order component for creating lazy routes with preloading
 */
export const createLazyRoute = (importFunction, routeName, options = {}) => {
  const LazyComponent = React.lazy(importFunction);
  
  return (props) => (
    <LazyRoute 
      routeName={routeName}
      {...options}
    >
      <LazyComponent {...props} />
    </LazyRoute>
  );
};

export default LazyRoute;

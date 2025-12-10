/**
 * Route Performance Analytics
 * Tracks lazy loading performance and provides insights
 */

class RouteAnalytics {
  constructor() {
    this.routeMetrics = new Map();
    this.preloadCache = new Set();
  }

  // Track route loading start
  startRouteLoad(routeName) {
    const startTime = performance.now();
    this.routeMetrics.set(routeName, {
      startTime,
      loadTime: null,
      isPreloaded: this.preloadCache.has(routeName)
    });
    
    // Performance mark for debugging
    performance.mark(`route-${routeName}-load-start`);
  }

  // Track route loading completion
  endRouteLoad(routeName) {
    const metric = this.routeMetrics.get(routeName);
    if (metric) {
      const endTime = performance.now();
      metric.loadTime = endTime - metric.startTime;
      
      // Performance mark and measure
      performance.mark(`route-${routeName}-load-end`);
      performance.measure(
        `route-${routeName}-duration`,
        `route-${routeName}-load-start`,
        `route-${routeName}-load-end`
      );

      // Log performance in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`📊 Route '${routeName}' loaded in ${metric.loadTime.toFixed(2)}ms ${metric.isPreloaded ? '(preloaded)' : ''}`);
      }
    }
  }

  // Mark route as preloaded
  markPreloaded(routeName) {
    this.preloadCache.add(routeName);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 Route '${routeName}' preloaded`);
    }
  }

  // Get performance summary
  getMetrics() {
    const metrics = {};
    for (const [route, data] of this.routeMetrics) {
      metrics[route] = {
        loadTime: data.loadTime,
        isPreloaded: data.isPreloaded
      };
    }
    return metrics;
  }

  // Get average load time
  getAverageLoadTime() {
    const times = Array.from(this.routeMetrics.values())
      .filter(m => m.loadTime)
      .map(m => m.loadTime);
    
    return times.length > 0 ? times.reduce((a, b) => a + b) / times.length : 0;
  }
}

// Export singleton instance
export const routeAnalytics = new RouteAnalytics();

/**
 * React hook for tracking route performance
 */
export const useRouteAnalytics = (routeName) => {
  const React = require('react');
  
  React.useEffect(() => {
    routeAnalytics.startRouteLoad(routeName);
    
    return () => {
      routeAnalytics.endRouteLoad(routeName);
    };
  }, [routeName]);
};

export default RouteAnalytics;

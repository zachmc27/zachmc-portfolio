import React from 'react';

/**
 * OptimizedImage Component
 * Provides modern image formats with fallbacks for better performance
 * Compatible with Chakra UI styling and all standard img props
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  style,
  ...props 
}) => {
  // Handle both imported paths and string paths
  const imagePath = typeof src === 'string' ? src : src;
  
  // Extract filename without extension
  const getBaseName = (path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return filename.replace(/\.[^/.]+$/, '');
  };

  const baseName = getBaseName(imagePath);
  
  // Generate optimized paths (always use public directory during runtime)
  const avifSrc = `/assets/images/optimized/${baseName}.avif`;
  const webpSrc = `/assets/images/optimized/${baseName}.webp`;
  const optimizedJpg = `/assets/images/optimized/${baseName}-optimized.jpg`;
  
  // Generate responsive WebP sources
  const webpSrcSet = `
    /assets/images/optimized/${baseName}-200.webp 200w,
    /assets/images/optimized/${baseName}-400.webp 400w,
    ${webpSrc} 800w
  `;

  return (
    <picture style={style}>
      {/* AVIF - Modern browsers, best compression */}
      <source srcSet={avifSrc} type="image/avif" />
      
      {/* WebP - Good compression, wide support */}
      <source 
        srcSet={webpSrcSet} 
        sizes={sizes} 
        type="image/webp" 
      />
      
      {/* JPEG fallback - Universal support */}
      <img 
        src={optimizedJpg}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        style={style}
        onError={(e) => {
          // Fallback to original image if optimized version fails to load
          e.target.src = imagePath;
        }}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;

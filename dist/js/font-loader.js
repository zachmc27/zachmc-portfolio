// Font Loading Optimization
// This script implements advanced font loading strategies for better performance

class FontLoader {
  constructor() {
    this.fontsToLoad = [
      { family: 'Quicksand', weight: '400', url: './fonts/quicksand-400.woff2' },
      { family: 'Quicksand', weight: '500', url: './fonts/quicksand-500.woff2' },
      { family: 'Quicksand', weight: '600', url: './fonts/quicksand-600.woff2' },
      { family: 'Quicksand', weight: '700', url: './fonts/quicksand-700.woff2' },
      { family: 'Montserrat', weight: '400', url: './fonts/montserrat-400.woff2' },
      { family: 'Montserrat', weight: '500', url: './fonts/montserrat-500.woff2' },
      { family: 'Montserrat', weight: '600', url: './fonts/montserrat-600.woff2' },
      { family: 'Montserrat', weight: '700', url: './fonts/montserrat-700.woff2' }
    ];
    this.loadedFonts = new Set();
  }

  // Check if Font Loading API is supported
  supportsFont() {
    return 'fonts' in document;
  }

  // Load fonts using Font Loading API
  async loadFont(fontConfig) {
    if (!this.supportsFont()) {
      return false;
    }

    try {
      const fontFace = new FontFace(
        fontConfig.family,
        `url(${fontConfig.url})`,
        { weight: fontConfig.weight, display: 'swap' }
      );

      const loadedFont = await fontFace.load();
      document.fonts.add(loadedFont);
      
      this.loadedFonts.add(`${fontConfig.family}-${fontConfig.weight}`);
      return true;
    } catch (error) {
      console.warn(`Failed to load font ${fontConfig.family} ${fontConfig.weight}:`, error);
      return false;
    }
  }

  // Load critical fonts first (regular weights)
  async loadCriticalFonts() {
    const criticalFonts = this.fontsToLoad.filter(font => font.weight === '400');
    
    const promises = criticalFonts.map(font => this.loadFont(font));
    await Promise.allSettled(promises);
    
    // Add loaded class to document
    document.documentElement.classList.add('fonts-loaded');
  }

  // Load remaining fonts after critical ones
  async loadRemainingFonts() {
    const remainingFonts = this.fontsToLoad.filter(font => 
      font.weight !== '400' && 
      !this.loadedFonts.has(`${font.family}-${font.weight}`)
    );
    
    const promises = remainingFonts.map(font => this.loadFont(font));
    await Promise.allSettled(promises);
    
    document.documentElement.classList.add('all-fonts-loaded');
  }

  // Initialize font loading
  async init() {
    // Load critical fonts immediately
    await this.loadCriticalFonts();
    
    // Load remaining fonts after a short delay
    setTimeout(() => {
      this.loadRemainingFonts();
    }, 100);
  }
}

// Initialize font loader when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const fontLoader = new FontLoader();
    fontLoader.init();
  });
} else {
  const fontLoader = new FontLoader();
  fontLoader.init();
}

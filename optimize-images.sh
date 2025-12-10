#!/bin/bash
# Image Optimization Script for Portfolio

echo "🖼️  Optimizing portfolio images..."

# Create optimized directory
mkdir -p assets/images/optimized

# Original file
ORIGINAL="assets/images/headshot.jpg"
OUTPUT_DIR="assets/images/optimized"

echo "📸 Processing headshot.jpg..."

# 1. Create WebP version (modern browsers)
echo "  → Creating WebP version..."
cwebp -q 85 "$ORIGINAL" -o "$OUTPUT_DIR/headshot.webp"

# 2. Create AVIF version (cutting-edge compression)
echo "  → Creating AVIF version..."
magick "$ORIGINAL" -quality 85 "$OUTPUT_DIR/headshot.avif" 2>/dev/null || echo "    ⚠️  AVIF conversion skipped (requires ImageMagick with AVIF support)"

# 3. Create optimized JPEG fallback
echo "  → Creating optimized JPEG fallback..."
magick "$ORIGINAL" -quality 85 -interlace Plane "$OUTPUT_DIR/headshot-optimized.jpg"

# 4. Create responsive sizes
echo "  → Creating responsive sizes..."
magick "$ORIGINAL" -resize 400x400 -quality 85 "$OUTPUT_DIR/headshot-400.webp"
magick "$ORIGINAL" -resize 200x200 -quality 85 "$OUTPUT_DIR/headshot-200.webp"

# Show file sizes
echo ""
echo "📊 File Size Comparison:"
echo "Original:     $(du -h "$ORIGINAL" | cut -f1)"
echo "WebP:         $(du -h "$OUTPUT_DIR/headshot.webp" | cut -f1) 2>/dev/null"
echo "AVIF:         $(du -h "$OUTPUT_DIR/headshot.avif" | cut -f1) 2>/dev/null"
echo "Optimized JPG: $(du -h "$OUTPUT_DIR/headshot-optimized.jpg" | cut -f1)"

echo ""
echo "✅ Optimization complete! Check the assets/images/optimized/ folder"

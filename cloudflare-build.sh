#!/bin/bash

# Build script for Cloudflare Pages deployment
echo "Building portfolio for Cloudflare Pages..."

# Build only the client-side React application
npm run build

# Copy the _routes.json to the build directory
cp client/public/_routes.json dist/public/

echo "Build complete! The website is ready for Cloudflare Pages deployment."
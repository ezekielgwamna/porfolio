// Cloudflare Pages Configuration

export default {
  // Build configuration
  build: {
    command: "npm run build:cloudflare",
    outputDirectory: "dist/public", // Matches the Vite build output directory
    environment: {
      NODE_VERSION: "18" // Use Node.js 18 for building
    }
  },

  // Optional: Configure headers
  headers: [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],

  // Handle client-side routing redirections
  routes: [
    { 
      "source": "/(.*)",
      "destination": "/index.html" 
    }
  ]
};
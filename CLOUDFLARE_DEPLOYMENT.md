# Deploying to Cloudflare Pages

This document outlines the steps to deploy your portfolio website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier is sufficient)
- Git repository hosting service (GitHub, GitLab, etc.)

## Deployment Steps

### 1. Prepare Your Repository

Make sure your code is pushed to a Git repository. Cloudflare Pages can connect directly to GitHub, GitLab, or other Git providers.

### 2. Create a New Cloudflare Pages Project

1. Log in to your Cloudflare dashboard
2. Navigate to **Workers & Pages** from the sidebar
3. Click on **Create application** > **Pages** > **Connect to Git**
4. Select your Git provider (GitHub, GitLab, etc.) and authenticate
5. Choose the repository containing your portfolio website
6. Click **Begin setup**

### 3. Configure Your Build Settings

Use these build configuration settings:

- **Project name**: `ezekiel-portfolio` (or your preferred name)
- **Production branch**: `main` (or whichever branch you want to deploy)
- **Build command**: `npm run build`
- **Build output directory**: `dist/public`
- **Node.js version**: `18` (or higher)

### 4. Environment Variables (Optional)

If your application uses environment variables, add them in the **Environment variables** section.

### 5. Deploy Your Site

Click **Save and Deploy**. Cloudflare will build and deploy your site.

### 6. Custom Domain (Optional)

To use a custom domain:

1. From your Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name (e.g., `portfolio.yourname.com`)
4. Follow the provided instructions to verify domain ownership
5. Update DNS settings as instructed

## Handling Client-Side Routing

Your project includes the necessary configuration for client-side routing to work properly:

- The `_routes.json` file in `client/public` (copied to build output)
- The route configuration in `cloudflare-pages.config.js`

This ensures that direct navigation to routes like `/projects` works correctly.

## Updating Your Site

Any changes pushed to your main branch will automatically trigger a new deployment. You can also manually trigger deployments from the Cloudflare Pages dashboard.

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Troubleshooting Deployments](https://developers.cloudflare.com/pages/platform/troubleshooting/)
- [Custom Domains with Cloudflare Pages](https://developers.cloudflare.com/pages/platform/custom-domains/)
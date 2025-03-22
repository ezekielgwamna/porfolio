# Ezekiel Gwamna - Portfolio Website

A modern, responsive portfolio website for Ezekiel Funom Gwamna, a Full Stack Software Engineer.

## Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS, Shadcn UI
- **Backend**: Express.js (for development)
- **Contact Form**: EmailJS
- **Hosting**: Cloudflare Pages

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth animations
- Contact form that sends emails directly from the client
- Light/dark mode toggle
- SEO optimized
- Fast loading times

## Deployment Instructions for Cloudflare Pages

### Prerequisites

- A Cloudflare account
- An EmailJS account for the contact form

### Step 1: Setup EmailJS for Contact Form

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (e.g., Gmail, Outlook)
3. Create an email template with the following variables:
   - `{{name}}` - The sender's name
   - `{{email}}` - The sender's email
   - `{{subject}}` - The email subject
   - `{{message}}` - The message content
4. Note the following IDs which you'll need for environment variables:
   - Service ID
   - Template ID
   - Public Key

### Step 2: Deploy to Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to your Cloudflare dashboard
3. Go to Pages > Create a project > Connect to Git
4. Select your repository
5. Configure the build settings:
   - **Project name**: Choose a name (e.g., "ezekiel-portfolio")
   - **Production branch**: `main` (or your default branch)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/public`
   - **Environment variables**: Add the following:
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
6. Click "Save and Deploy"

### Step 3: Set Up Custom Domain (Optional)

1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Follow the instructions to add your domain

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at http://localhost:5000

## License

MIT
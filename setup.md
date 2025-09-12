# Setup Instructions for Oderland Digitalpartner Website

## Prerequisites

Before you can run this project, you need to install Node.js and npm:

### Option 1: Install Node.js directly
1. Go to [nodejs.org](https://nodejs.org/)
2. Download and install the LTS version (18.x or higher)
3. This will also install npm

### Option 2: Use a Node Version Manager (Recommended)
1. Install nvm-windows from [github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
2. Open PowerShell as Administrator
3. Run: `nvm install 18` and `nvm use 18`

## Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Go to [http://localhost:8080](http://localhost:8080)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## GitHub Pages Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### Step 3: Access Your Site
Your site will be available at:
`https://<your-username>.github.io/<repository-name>/`

## Troubleshooting

### If you get "npm not found" error:
- Make sure Node.js is installed
- Restart your terminal/PowerShell
- Try running `node --version` to verify installation

### If the build fails:
- Make sure all dependencies are installed: `npm install`
- Check for any TypeScript errors in the console
- Ensure all image files exist in the `src/assets` folder

### If GitHub Pages shows a blank page:
- Check the Actions tab in your GitHub repository for build errors
- Make sure the base URL in `vite.config.ts` matches your repository name
- Verify that the build completed successfully

## Project Structure
```
src/
├── components/     # All React components
├── assets/         # Images and static files
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── pages/          # Page components
```

## Technologies Used
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Shadcn/ui (components)
- React Router (routing)

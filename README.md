# Oderland Digitalpartner

A modern website for Oderland Digitalpartner - your digital partner in Märkisch-Oderland, Brandenburg.

## Features

- Modern React + TypeScript + Vite setup
- Tailwind CSS for styling
- Shadcn/ui components
- Responsive design
- SEO optimized
- GitHub Pages ready

## Local Development

### Prerequisites

- Node.js 18+ and npm (or use Bun)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd oderland-digital-boost-main
```

2. Install dependencies:
```bash
npm install
# or if using Bun:
bun install
```

3. Start the development server:
```bash
npm run dev
# or if using Bun:
bun dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub.com
   - Click on "Settings" tab
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Your site will be available at:**
   `https://<your-username>.github.io/<repository-name>/`

### Manual Deployment

If you want to build and deploy manually:

```bash
npm run build
# The built files will be in the 'dist' folder
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   └── ...             # Page components
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library
- **React Router** - Client-side routing
- **Lucide React** - Icons

## License

This project is private and proprietary to Oderland Digitalpartner.
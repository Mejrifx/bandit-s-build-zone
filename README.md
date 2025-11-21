# $BANDIT - Building in Progress

A modern splash page for the $BANDIT community.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone https://github.com/Mejrifx/bandit-s-build-zone.git

# Step 2: Navigate to the project directory
cd bandit-s-build-zone

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Technologies

This project is built with:

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React** - UI framework
- **shadcn-ui** - Component library
- **Tailwind CSS** - Styling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary build settings.

To deploy:
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings
3. Your site will deploy automatically on every push to the main branch

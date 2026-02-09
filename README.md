# Portfolio Full-Stack Website

A modern portfolio website built with Next.js 14 (frontend) and NestJS (backend) in a monorepo structure.

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: NestJS, TypeScript, Prisma ORM, PostgreSQL
- **Development**: PNPM workspaces, Docker, ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM 8+
- PostgreSQL (for production)

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env

# Run database migrations
pnpm db:migrate

# Start development servers
pnpm dev
```

### Project Structure

```
portfolio/
├── apps/
│   ├── frontend/     # Next.js application
│   └── backend/      # NestJS application
├── packages/
│   ├── shared-types/ # Shared TypeScript types
│   ├── shared-utils/ # Shared utility functions
│   └── ui-components/ # Shared UI components
└── docker-compose.yml
```

## Scripts

- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build both applications for production
- `pnpm test` - Run all tests
- `pnpm lint` - Lint all packages
- `pnpm format` - Format all code with Prettier

## Deployment

### Docker

```bash
# Build and start containers
docker-compose up -d

# For production
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment

- Frontend: Deploy to Vercel, Netlify, or any static hosting
- Backend: Deploy to Railway, Heroku, or any Node.js hosting

## License

MIT

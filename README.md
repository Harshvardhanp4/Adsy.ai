# Adsy.ai

Adsy.ai is an AI-powered creative platform for generating product-focused visuals and marketing assets.

It includes:
- A React + Vite frontend
- A Node.js + Express backend
- Prisma + PostgreSQL for data
- Clerk authentication and webhooks
- Cloudinary media handling
- Google GenAI integration for image/video generation

## Live Demo

https://adsy-ai-frontend.onrender.com


> Note: Demo mode is currently enabled for interview/demo purposes. Some generation flows may be intentionally disabled while API credits/services are being restored.

## Features

- User authentication with Clerk
- Credits-based generation flow
- Image and video generation pipeline
- My Generations dashboard
- Community feed for published projects
- Publish/unpublish and delete project actions
- Production deployment on Render (frontend and backend separately)

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- Clerk React SDK

### Backend
- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- Clerk Express SDK
- Cloudinary
- Google GenAI
- Sentry

## Project Structure

```text
Adsy.ai/
  backend/
  frontend/
  u_assets/
```

## Local Development

### 1) Clone and install

```bash
git clone https://github.com/Harshvardhanp4/Adsy.ai.git
cd Adsy.ai
```

### 2) Backend setup

```bash
cd backend
npm install
```

Create a `.env` in `backend/` with:

```env
DATABASE_URL=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SIGNING_SECRET=
CLOUDINARY_URL=
GOOGLE_CLOUD_API_KEY=
SENTRY_DSN=
```

Run backend:

```bash
npm start
```

### 3) Frontend setup

```bash
cd ../frontend
npm install
```

Create a `.env` in `frontend/` with:

```env
VITE_BASEURL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=
VITE_DEMO_MODE=true
```

Run frontend:

```bash
npm run dev
```

## Deployment (Render)

### Backend (Web Service)

- Root Directory: `backend`
- Build Command: `npm install && npm run build && npx prisma migrate deploy`
- Start Command: `npm start`
- Required env vars:
  - `DATABASE_URL`
  - `CLERK_SECRET_KEY`
  - `CLERK_WEBHOOK_SIGNING_SECRET`
  - `CLOUDINARY_URL`
  - `GOOGLE_CLOUD_API_KEY`
  - `SENTRY_DSN` (optional)

### Frontend (Static Site)

- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Required env vars:
  - `VITE_BASEURL=https://adsy-ai-backend.onrender.com`
  - `VITE_CLERK_PUBLISHABLE_KEY=<your_key>`
  - `VITE_DEMO_MODE=true`

### Clerk configuration

- Webhook endpoint:
  - `https://adsy-ai-backend.onrender.com/api/clerk`
- Add frontend domain to Clerk allowed origins/redirect URLs:
  - `https://adsy-ai-frontend.onrender.com`

## Security Notes

- Never commit `.env` files.
- Rotate secrets immediately if leaked.
- Use production Clerk keys for production deployment.

## Author

Built by Harshvardhan.

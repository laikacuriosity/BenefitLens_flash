
# BenefitLens Prototype

BenefitLens is an AI-powered, privacy-first platform designed to help credit card holders discover hidden perks using context-aware recommendations.

## Core Features
- **Multilingual Support**: English, Tamil, and Hindi.
- **Context-Aware Engine**: Re-ranks benefits based on location (Airport, Mall, Gas Station) and day of the week.
- **Privacy-First**: Zero-storage model. Card data is processed locally and sessions expire in 15 minutes.
- **Smart Catalog**: AI-simplified "Legalese-to-Human" benefit explanations.

## Local Setup

1. Clone or download this project.
2. Ensure you have [Node.js](https://nodejs.org/) installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Deployment Guide

### Local Serving
Locally, the app uses **Vite** as a development server. It serves the files and handles live-reloads while you develop.

### Production Deployment
To put this app on the internet:
1. **Generate the build**:
   ```bash
   npm run build
   ```
2. **Result**: A `dist/` folder will be created. This folder contains the "production-ready" static assets.
3. **Hosting**: Upload the contents of the `dist/` folder to any static hosting provider:
   - **Vercel / Netlify**: (Highly recommended) Connect your Git repo for auto-deploys.
   - **GitHub Pages**: Ideal for simple prototype hosting.
   - **S3/CloudFront**: For professional, low-latency global distribution.

## Test Card Credentials (BINs)
- **Visa Signature (SBI)**: `4532 0151 1283 0366`
- **Visa Infinite (ICICI)**: `4012 8888 8888 1881`
- **Visa Classic (HDFC)**: `4111 1111 1111 1111`

## Technology Stack
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Bundler**: Vite (Rollup)
- **Icons**: Lucide React
- **Routing**: React Router

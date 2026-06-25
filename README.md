
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
3. open Command prompt tab: navigate to the server dir and run thee following command:
   ```bash
   node server.js
   ```
4. click on the link to test the working of the model.
5. open powershell tab and start redis. Here I am using docker to start a redis session:
  ```bash
   docker pull redis
   docker run -d --name redis-server -p 6379:6379 redis
   ```
   verify by running:
   ```bash
   docker ps
   ```
   you should see something similar to:
   
   <br>CONTAINER ID        IMAGE      PORTS</br>
   <br>abc123              redis      0.0.0.0:6379->6379/tcp</br>
6. Open command prompt: ensure you are in the BenefitLens_flash dir and Install dependencies:
   ```bash
   npm install
   ```
7. Run the development server:
   ```bash
   npm run dev
   ``` 

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
- **Visa Signature (SBI)**: `4012888888881881`
- **Visa Infinite (ICICI)**: `4485275742308327`
- **Visa Classic (HDFC)**: `4111 1111 1111 1111`
## Technology Stack
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Bundler**: Vite (Rollup)
- **Icons**: Lucide React
- **Routing**: React Router

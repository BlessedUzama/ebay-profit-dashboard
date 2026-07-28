# 📈 eBay Profit Dashboard

An automated, full-stack e-commerce dashboard built to track eBay sales, calculate real-time net profit margins using Google Sheets, and generate AI-driven business intelligence.

Designed as a robust, low-maintenance developer portfolio piece, this application features a resilient backend with a self-sustaining mock data simulator, ensuring the dashboard always displays fresh, realistic metrics for recruiters and clients even when live APIs are offline or rate-limited.

## ✨ Key Features

*   **Live eBay Order Tracking:** Connects to the eBay Sandbox to pull recent seller order histories.
*   **Google Sheets Sync:** Maps product SKUs directly to a Google Sheet to retrieve dynamic Cost of Goods Sold (COGS) and shipping data.
*   **Multi-Tier AI Business Intelligence:** 
    *   *Primary:* OpenAI (gpt-4o-mini) for deep retail strategy.
    *   *Secondary Failover:* Google Gemini (2.0 Flash) as a reliable backup.
    *   *Tertiary Failover:* Local algorithmic text generation for guaranteed uptime.
*   **Dynamic Time-Based Simulator:** A self-refreshing mock data generator that automatically rotates product catalogs and calculates organic profit variances based on the current calendar month. This eliminates the need to manually execute test checkouts in the eBay sandbox just to keep the portfolio looking active.
*   **Unbreakable API Architecture:** Bulletproof error handling on the serverless backend catches network timeouts, token expirations, and AI quota limits (`429` errors), ensuring a graceful `200 OK` response with beautiful fallback data every time.

## 🛠️ Tech Stack

*   **Frontend:** React, Vite, Context API
*   **Backend:** Vercel Serverless Functions (Node.js)
*   **Integrations:** eBay REST API, Google Sheets API (`google-spreadsheet`), OpenAI API, Google Generative AI SDK

## 🚀 Local Development Setup

Due to known registry compatibility issues with recent Vercel updates (`@vercel/koa`), it is recommended to run this project locally using the stable Vercel CLI version `37.12.1`.

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
EBAY_CLIENT_ID=your_client_id
EBAY_CLIENT_SECRET=your_client_secret
EBAY_REFRESH_TOKEN=your_refresh_token
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_email
GOOGLE_PRIVATE_KEY="your_private_key"
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
```

### 3. Start the Development Server
Run the application using the stabilized Vercel CLI environment:
```bash
npx vercel@37.12.1 dev
```
*(Note: If you are using a WSL environment and the browser login hangs, bypass it by appending your token directly: `npx vercel@37.12.1 dev --token YOUR_VERCEL_TOKEN`).*

## 🧠 Architecture Notes
The `/api/orders.js` route operates on a cascading try/catch methodology. If the primary eBay data fetch or Google Sheets sync fails at Step 1 or 2, a global flag trips, skipping the live AI calls and immediately engaging the Dynamic Order Generator. This guarantees that UI components never crash from `500 Internal Server Error` responses, making it a perfectly stable showcase application.
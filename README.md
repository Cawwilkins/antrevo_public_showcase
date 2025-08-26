# antrevo_public_showcase
AntrEvo is a trading-alerts application designed for simplicity and clarity.
This repository is the public frontend showcase built with React, Vite, and Tailwind. It demonstrates the product experience, UI patterns, and component quality used in the real app—without exposing proprietary algorithms or backend code.
Note: This repo intentionally excludes business logic (signal generation, thresholds, data pipelines, alert rules, vendor integrations, etc.). Those live in a private backend.

✨ Why this repo exists
For employers & collaborators: Quickly evaluate my product thinking, UI polish, accessibility choices, and frontend engineering patterns.
For the business: Keep the moat—no alert algorithms or backend internals are revealed here.


🚀 What’s included (safe to open-source)
React 19 + Vite 7 app scaffold
Tailwind styling and component patterns
UI flows: sign-in, strategy selection, stock switcher, simulate trade, disclaimers
Accessible modals and alerts
SEO & social meta tags, deploy config, ESLint + modern rules


🔒 What’s excluded (private for the business)
Strategy math & signal thresholds (SMA/RSI/Bollinger variants, tuning)
Data ingestion pipelines & normalization logic
Vendor integrations (market data, email/SMS delivery, auth providers)
Alert timing logic, debouncing, and risk/quality filters
User/account data and operational dashboards

UI: React 19, React Router
Build: Vite 7
Styles: Tailwind CSS
Linting: ESLint (recommended configs, React Hooks rules)
Deploy: Vercel (redirects + security headers set)


Product disclaimers (public stance)
No financial advice. AntrEvo provides alerts for educational/informational purposes only.
You control your trades. AntrEvo does not execute trades or manage portfolios.
Data & messaging costs. Carrier messaging/data rates may apply for SMS notifications.
The full legal text is visible in the in-app Disclaimer modal.

I’m exploring Software Engineering roles with a strong product focus.
If you’d like a private walk-through of the full system (including backend architecture and the business plan), contact me:

Christian Wilkins 
LinkedIn: https://www.linkedin.com/in/christian-a-wilkins
GitHub: https://github.com/Cawwilkins

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

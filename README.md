# Consent-based Location Sharing Demo

## Run locally

1. Install Node.js.
2. Open a terminal in this folder.
3. Run:
   npm install
4. Start:
   npm start
5. Open:
   http://localhost:3000

## Pages

- `/` — person sharing their location
- `/dashboard.html` — dashboard showing the latest voluntarily shared location

## Important

The browser's geolocation permission is required. The app does not secretly collect a person's location from a tap.

For a friend using a different device, deploy this app to a service that provides HTTPS. Geolocation normally requires a secure context. Do not expose the dashboard publicly without adding authentication/access control.

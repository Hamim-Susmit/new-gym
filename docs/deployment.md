# Deployment Guide

## Web (Vercel)
1. Link the `web` directory to Vercel.
2. Configure environment variables.
3. Deploy via `vercel --prod`.

## Mobile (EAS Build)
1. Configure `eas.json` for production profiles.
2. Run `eas build --platform all --profile production`.
3. Submit builds to app stores with `eas submit`.

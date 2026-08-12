# Sutheesh Portfolio — Local Setup

## Run with npm

Open a terminal in the project root (the folder containing `package.json`) and run:

```powershell
npm install
npm run dev
```

Then open:

http://localhost:3000/

If port 3000 is busy, Vite will automatically use the next available port.

## Main fix included

The original project referenced:

`@/data/portfolioData`

but `client/src/data/portfolioData.ts` was missing. The corrected project now includes that file with the data structure required by the existing components.

## Personal files to replace later

Profile photo:

`client/public/profile.jpg`

Resume:

`client/public/resume.pdf`

Portfolio content:

`client/src/data/portfolioData.ts`

Replace the placeholder email, LinkedIn URL, profile photo, resume, and project links with your own details.

## Useful commands

```powershell
npm run dev
npm run check
npm run build
npm run preview
```

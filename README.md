This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Manrope and Fraunces.

## Despliegue en VPS

Comandos básicos para preparar y levantar el proyecto en producción:

```bash
npm install
npm run build
pm2 start npm --name daka-main-web -- run start
pm2 save
```

Con `output: "standalone"` también queda disponible el script opcional:

```bash
npm run start:standalone
```

Para mantenimiento después de subir cambios:

```bash
git pull
npm install
npm run build
pm2 restart daka-main-web
```

Nginx debe actuar como reverse proxy hacia el puerto donde esté escuchando Next.js, normalmente `3000` si se usa `npm run start` sin configurar otro puerto. El favicon actual está en `app/favicon.ico`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

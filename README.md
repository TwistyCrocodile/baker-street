# Baker Street Landing

Premium landing page for Baker Street, a warm local cafe and bakery in Alatau. The page presents the cafe atmosphere, breakfasts, coffee and bakery items, delivery sets, gallery, and contact actions with WhatsApp as the main conversion path.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Local Run

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Vite will print the local URL, usually `http://127.0.0.1:5173/`.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Image Folders

Static images live in `public/` and are referenced from the app with root-relative paths.

- `public/interior/` - cafe interior, facade, and atmosphere photos
- `public/food/` - breakfasts, coffee, bakery, and delivery set photos

Keep filenames stable if the code already references them, or update the paths in `src/data.ts` and section components.

## Deployment Notes

### Vercel

Use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

No environment variables are required for the current version.

### GitHub Pages

For a repository deployed at a subpath, set `base` in `vite.config.ts` to the repository name, for example:

```ts
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
});
```

Then build with `npm run build` and publish the `dist` directory through your preferred GitHub Pages workflow.

## Notes

- Do not commit `node_modules/` or `dist/`.
- Instagram link is configured in `src/data.ts`.

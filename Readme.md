# Create a project

```sh
npx create-next-app@latest eventsApp
```

# Start and compile project in dev env

```sh
cd events_app
npm run dev
```

# Next.js App Router Setup for About Us Page

In Next.js 13+ with the **App Router**, you can create a page accessible at `http://localhost:3000/about-us` by following this structure:

## Folder Structure

```plaintext
/src
├── /app
│   ├── /about-us
│   │   └── page.js       # About Us page (http://localhost:3000/about-us)
│   ├── layout.js         # Root layout (applies to all routes)
│   └── page.js           # Homepage (http://localhost:3000/)
```

## If we need to get data from url

```sh
const res = await fetch(URL);
const data = await res.json();
```

## Git tips

```sh
git checkout --orphan latest_branch
git rm -r --cached events_app/.next
```

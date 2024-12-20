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

# For dynamic path routing and rendering, there are 2 steps:

1. generateStaticParams function to list down all paths
2. reference the path param generated and filter/retrieve relevant contents

# Revise the code by making reusable parts into components

1. Arguments can be passed as props from the parent (calling) function.

# Shortcut to create arrow function (rafce)

## Git tips

```sh
cd events_app
rm -rf .git
git checkout --orphan latest_branch
git rm -r --cached events_app/.next
```

## Random Notes

1. Link gives the ability to do client-side navigation in the browser so the pages are loaded using Javascript and we don't make a new request to the server
2. global.css is applied to the whole website and is imported by layout.js

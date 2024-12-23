# Install required packages

```sh
npm i next-auth
```

# Register OAuth app on GitHub

https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app
![alt text](image.png)

# Register OAuth app on Google

https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project
Create Credentials -> OAuth Client ID
Authorized redirect URLs: http://localhost:3000/api/auth/callback/google

# Generate secret

```sh
openssl rand -base64 32
```

# Folders and files that are needed for third-party authentications

1. Folder: api/auth/[...nextauth]
2. Files under the folder: options.js & route.js

- options.js defines the third-party providers, profile, callback token & session management logic
- route.js kind of wraps around options

# Client-side vs server side page protected by auth

1. server-side:
   a) use getServerSession(options)
   b) see middleware.js
2. client-side: need to use useSession hook + AuthProvider with SessionProvider tags, then modify
   in layout.js to wrap around children
   So suggestion is to use server-side page rendering whenever possible

# Install MongoDB packages

```sh
npm i mongodb
npm i mongoose
npm i bcrypt
```

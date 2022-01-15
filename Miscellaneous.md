# this is the Miscellaneous

## page layout

- for example header and footer we can just import it in the \_app.js file
- or use conditional rendering for example the page before login or sign in have a default layout

## using Head component form nextjs

- Head component is used to set the title, meta tags, and link tags
- it helps with SEO

## Using the Image Component from nextjs

- Image component is used to load images it improves and optimizes the loading of images
- it can lazy load images
- help with SEO

## export nextjs project into a static html file

- we can use nextjs to export the project into a static html file without nodejs server
- but we cant use ISR SSR or Images or fallback set to true in the getStaticPaths function
- its suitable for landing page or any app where the content is generated at the build time

## TypeScript Support

- adding a tsconfig.json file to the root of the project the file will be populated by default with the typescript compiler options

## redirecting to another page

in the next.config.js file we can use the redirect function to redirect to another page

```js
module.exports = {
  reactStrictMode: true,
  redirects: [
    {
      source: "about",
      distinction: "/",
      permanent: true,
    },
  ],
};
```

## ENV variables

- we have to create a .env.local file in the root of the project and add the variables

- accessing it using process.env.VARIABLE_NAME
- if we want in the components we can prefix with NEXT_PUBLIC_VARIABLE_NAME

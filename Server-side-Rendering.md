# Server-side Rendering

## solve problem that we have to generate the html at request time

1. server must compute the result on every request and send it to the client therefor its slower than the static rendering.
2. The getServerSideProps will only run on the server not on the client.
3. the code will not be bundled with the client.

## Server-side Rendering with dynamic parameters params

- without getStaticPaths

```js
export async getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const post = await getPost(id);
  return { props: { post } };
}
```

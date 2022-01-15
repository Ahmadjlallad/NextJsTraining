import { GetStaticProps } from "next";
export default function News({ data }) {
  return <div className="content">{data}</div>;
}
export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context.previewData);
  if (context.preview) {
    return {
      props: {
        data: "Draft News",
      },
    };
  } else
    return {
      props: {
        data: "News",
      },
    };
};

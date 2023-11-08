import { PortableText } from "@portabletext/react";
import Layout , { siteTitle } from "../components/layout";
import { getIdPost } from "../sanity/sanity.utils";
import Head from 'next/head';
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

export async function getServerSideProps({ params }) {
  const postData = await getIdPost(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const components = {
    // Define the 'image' block type component
    image: Image, // Replace 'Image' with your actual image component
  };
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.headingMdPost}>
        <h1 className={utilStyles.headingXlPost}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className="articleText">
          <PortableText value={postData.content} components={{}} />
        </div>
      </article>
    </Layout>
  );
}

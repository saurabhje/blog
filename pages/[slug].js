import { PortableText } from "@portabletext/react";
import Layout , { siteTitle } from "../components/layout";
import { getIdPost,ImageUrl } from "../sanity/sanity.utils";
import Head from 'next/head';
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export async function getServerSideProps({ params }) {
  const postData = await getIdPost(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post ({ postData }) {
  const components = {
    types: {
      image: ({ props }) => {
        console.log('Image Component Props:', props);
        return (
          <Image src={ImageUrl(props).url()} alt="image" />
        );
      },
    },
  };
  console.log(postData.content)
  
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
        <PortableText value={postData.content} components={components} />
        </div>
      </article>
    </Layout>
  );
}

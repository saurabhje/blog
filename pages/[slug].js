import { PortableText } from "@portabletext/react";
import Layout from "../components/layout";
import { getIdPost, urlFor } from "../sanity/sanity.utils"; // Import imageUrl correctly
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

export default function Post({ postData }) {
  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        
        <Image
          src={urlFor(value).url()}
          className={utilStyles.articleImage}
          alt="Image"
          width={800}
          height={800}
        />
      ),
    },
  };


  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingXlPost}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className="articleText">
          <PortableText value={postData.content} components={PortableTextComponent} />
        </div>
      </article>
    </Layout>
  );
}

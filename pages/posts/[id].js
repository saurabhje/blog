import { PortableText } from "@portabletext/react";
import Layout from "../../components/layout";
import { getAllIds , getIdPost} from "../../lib/post";
import Head from 'next/head';

export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    const postData = await getIdPost(params.id);
    return {
      props: {
         postData
      },
    };
  }

  export default function Post({ postData }) {
    return (
      <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.date}
            <br />
            <PortableText value={postData.content} components={{}}/>
      </Layout>
    );
  }
  
  
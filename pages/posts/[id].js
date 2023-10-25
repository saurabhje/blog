import { PortableText } from "@portabletext/react";
import Layout from "../../components/layout";
import { getAllIds , getIdPost} from "../../lib/post";
import Head from 'next/head';
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

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
            <article className={utilStyles.headingMdPost}>
                <h1 className={utilStyles.headingXlPost}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div className="articleText">
                    <PortableText value={postData.content} components={{}}/>
                </div>
                
            </article>
      </Layout>
    );
  }
  
  
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>All blogs</title>
      </Head>
      <div className={utilStyles.headingMd}>
        <p></p>
      </div>
    </Layout>
  );
}

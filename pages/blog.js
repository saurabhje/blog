import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import { getSortedPostData } from '../sanity/sanity.utils';
import Link from 'next/link';
import Date from '../components/date';

export async function getServerSideProps() {
    const allPostsData = await getSortedPostData();
    return {
      props: {
        allPostsData,
      },
    };
  }
export default function Blog({allPostsData}) {

  return (
    <Layout>
      <Head>
        <title>All blogs</title>
      </Head>
      <div className={utilStyles.headingMd}>
        <h1 >📰Blog Posts</h1>
        <section className={`${utilStyles.headingMd} ${utilStyles.paddingLeft}`}>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ slug, date, title , _id}) => (
                    <li className={utilStyles.listItem} key={_id}>
                        <Link href={`/${slug.current}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
      </section>
      </div>
    </Layout>
  );
}

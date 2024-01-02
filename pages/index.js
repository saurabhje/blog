import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostData } from '../sanity/sanity.utils';
import { siteTitle } from '../components/layout';

export async function getServerSideProps() {
  const allPostsData = await getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  const limitedPosts = allPostsData.slice(0, 5);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is where I write stuff. Abandon all hope. Leave all uncertainty of my future. And dump all multimillion imaginary ideas. Pretty sick i must say for a delusion enthuasist</p>
        <p>

        </p>
        <p>
          This is a simple and minimalist blog - created using{' '}
          <a href="https://nextjs.org/learn">NextJS</a> and
          <a href="https://www.sanity.io/"> Sanity </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.margin}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a href='https://code-board-three.vercel.app/'>Code Board</a> A place for developers to copy or paste simple code snippets
          </li>
          <li className={utilStyles.listItem}>
            <a href='https://thethirdfront.vercel.app/'>The Third Front</a> A simple satire News site, where I and a friend try to tackle serious issues with our broken humour
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.margin}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {limitedPosts.map(({ slug, date, title , _id}) => (
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
    </Layout>
  );
}

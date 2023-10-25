import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostData } from '../lib/post';

export async function getStaticProps() {
  const allPostsData = await getSortedPostData();
  return {
    props: {
      allPostsData,
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Je</strong>. I'm a software engineer and infrastructure nerd. I currently work with MERN, Next.js, Python, Django, and Flask. After a few months, I want to transition to web3 technologies. Learning Solidity will be the first step.
        You can contact me on <a href='https://twitter.com/simyora'>Twitter</a>.
        </p>
        <p>
          (This is a sample and minimalist blog - created using{' '}
          <a href="https://nextjs.org/learn">NextJS</a> and
          <a href="https://www.sanity.io/"> Sanity </a>
          )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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
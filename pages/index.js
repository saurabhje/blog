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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>
        Hey there! I'm <strong>Je</strong>, a software engineer who enjoys creating things. I'm all about crafting apps that are simple, efficient, and just plain awesome.
      </p>
      <p>
        I'm not a fan of flashy graphics or complicated websites. I prefer to keep things clean and minimal while ensuring they're enjoyable to use. Imagine it as making cool stuff without the unnecessary complexity.
      </p>
      <p>
        When I'm not immersed in the tech world, I'm exploring the intriguing realm of quantum mechanics. I'm also thrilled about the concept of <strong>web3</strong> and <strong>decentralization</strong>. I'm on a journey to grasp the fundamentals of web3, which promises a world of exciting possibilities.
      </p>
      <p>
        In a world filled with <i><strong>complexity</strong></i>, I prioritize <i><strong>simplicity</strong></i>, <i><strong>efficiency</strong></i>and <i>scalability</i>(lies,that is something I'm still learning). Join me on this adventure as we create fantastic apps that are user-friendly and clever. Feel free to reach out to me on <a href='https://twitter.com/saurabhjesingh'>Twitter</a> and <a href='https://www.linkedin.com/in/saurabhje/'>LinkedIn</a>. And don't worry, I'm not too serious – I'm always up for a good laugh. 😄
      </p>

        <p>
          (This is a simple and minimalist blog - created using{' '}
          <a href="https://nextjs.org/learn">NextJS</a> and
          <a href="https://www.sanity.io/"> Sanity </a>
          )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
    </Layout>
  );
}

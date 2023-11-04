import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostData } from '../sanity/sanity.utils';

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
          Greetings, I'm <strong>Je</strong>, a software engineer and infrastructure enthusiast, dedicated to sculpting development environments that embody purity, efficiency, and the disciplined essence of a monk's haven.
        </p>
        <p>
          My objective isn't entangled in elaborate graphics or exceptional websites; I'm an advocate for forging applications that are both <strong>minimal</strong> yet irresistibly captivating. I hold a deep reverence for the elegance of <strong>efficiency</strong>, <strong>the beauty of cleanliness</strong>, and the artistry of <i>complexity</i> in <i>functionalities</i>.
        </p>
          When I'm not plumbing the depths of the tech universe, I'm captivated by the enigmatic world of quantum mechanics. The idea of <strong>web3</strong> and <strong>decentralization</strong> holds an irresistible allure for me, and I'm on the brink of a thrilling transition into this uncharted domain. My inaugural stride in this direction is the acquisition of Solidity, a language that unlocks a portal to a realm teeming with unexplored prospects.
        <p>
          In a universe often besieged by intricacy, I'm here to champion the ideals of <strong>simplicity</strong>, <strong>efficiency</strong>,<strong> scalable</strong> and the allure of intricate functionality. Join me on this journey, where we celebrate the craft of forging applications that are irresistibly captivating and artfully intricate.
          You can contact me on <a href='https://twitter.com/saurabhjesingh'>Twitter</a> and <a href='https://www.linkedin.com/in/saurabhje/'>LinkedIn</a> .
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
              <Link href={`/posts/${slug.current}`}>{title}</Link>
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

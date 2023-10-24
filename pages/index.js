import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Je. I'm a software engineer and infrastructure nerd. I currently work with MERN, Next.js, Python, Django, and Flask. After a few months, I want to transition to web3 technologies. Learning Solidity will be the first step.
        You can contact me on <a href='https://twitter.com/simyora'>Twitter</a>.
        </p>
        <p>
          (This is a sample and minimalist blog - created using{' '}
          <a href="https://nextjs.org/learn">NextJS</a> and
          <a href="https://ghost.org/"> Ghost</a>
          )
        </p>
      </section>
    </Layout>
  );
}
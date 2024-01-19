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
        <p>Hello there! My name is Saurabh Je Singh, and I'm a sophomore studying Machine Learning Engineering. Through this platform, I aim to share my experiences as an engineering student, the challenges I face, and how I overcome them. As an enthusiastic learner, I'm constantly seeking opportunities to enhance my knowledge and skills in machine learning and related fields, while exploring their practical applications in real-world scenarios.</p>
        <p>
          I invite you to explore my blog, where I share my thoughts on various topics related to machine learning, programming, and technology. I also post updates on my projects, which include experiments, simulations, and implementations of machine learning models and algorithms. Additionally, I share resources and tips that I find helpful in my own learning journey, such as tutorials, books, and online courses.
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

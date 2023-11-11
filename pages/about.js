import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className={utilStyles.headingMd}>
      <p>
        Hi, I'm <span style={{ fontSize: 'larger', fontWeight: 'bold' }}>Je</span>. I am never sleepless. I proudly go by <strong>megamind</strong>, though my intellect is more fetch-the-ball than solve-the-universe. And my emotional intelligence? Picture a potato having an existential crisis – that's me at my best!
      </p>
      <p>
        I am a red flag, not the one which girls like. I am the real one -
        I listen to Kanye West.
      </p>
      </div>
    </Layout>
  );
}

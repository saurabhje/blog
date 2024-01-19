import Head from "next/head";
import { PortableText } from "@portabletext/react";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import { getTimeLine } from "../sanity/sanity.utils";

export async function getServerSideProps() {
  const timelineData = await getTimeLine();
  return {
    props: {
      timelineData,
    },
  };
}

export default function About({ timelineData, }) {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className={utilStyles.headingMd}>
        <section className={utilStyles.margin}>
          <h1> 👨🏽‍💻About me </h1>
          <p>
            Hi, I'm <span style={{ fontSize: 'larger', fontWeight: 'bold' }}>Je</span>. I am never sleepless. I proudly go by <strong>megamind</strong>, though my intellect is more fetch-the-ball than solve-the-universe. And my emotional intelligence? Picture a potato having an existential crisis – that's me at my best!
          </p>
          <p>
            Stay Tuned (not like anyone else is visiting this) for updated about me. LOL!
          </p>
        </section>
        <section className={utilStyles.margin}>
          <h1 className={utilStyles.aboutheading}>🛠️ Personal Tools </h1>
          <ul className={utilStyles.customList}>
            <li className={utilStyles.ListItems}>
              <strong>Main Machine</strong>: <del><a href="https://learn.microsoft.com/en-us/windows/wsl/about">Windows-Wsl + R5</a></del> <a href="https://archlinux.org/">Arch Linux</a> + <a href="https://ohmyz.sh/">Zsh</a>
            </li>

            <li className={utilStyles.ListItems}>
              <strong>Editor</strong>: <a href="https://code.visualstudio.com/">VSC</a> and <a href="https://www.vim.org/">Vim</a>
            </li>
            <li className={utilStyles.ListItems}>
              <strong>Laptop</strong>: <a href="https://www.dellstore.com/vostro-14-3405-laptop-d552202win9d.html">Dell Vostro</a>
            </li>
          </ul>
        </section>
        <section>
          <h1 className={utilStyles.aboutheading}>📅 Timeline</h1>
          {timelineData.map((entry) => (
            <div key={entry}>
              <h3 className={utilStyles.headingMd}>{entry.year}</h3>
              <ul className={utilStyles.customList}>
                {entry.events.reverse().map((event, index) => (
                  <li className={utilStyles.ListItems} key={index}>
                    <strong>{event.title}</strong>
                    <PortableText value={event.description} suppressHydrationWarning />
                  </li>
                ))}
              </ul>
              <hr style={{ color: "#e4e4e48c" }} />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

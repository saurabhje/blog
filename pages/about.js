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
              <strong>Main Machine</strong>: <a href="https://learn.microsoft.com/en-us/windows/wsl/about">Windows-Wsl + R5</a>
            </li>
            <li className={utilStyles.ListItems}>
              <strong>Dildo</strong>: Nah! I don't use any.
            </li>
            <li className={utilStyles.ListItems}>
              <strong>Editor</strong>: <a href="https://code.visualstudio.com/">VSC</a>
            </li>
            <li className={utilStyles.ListItems}>
              <strong>Laptop</strong>: <a href="https://www.dellstore.com/vostro-14-3405-laptop-d552202win9d.html">Dell Vostro</a>
            </li>
          </ul>
      </section>
      <section>
      <h1 className={utilStyles.aboutheading}>📅 Timeline</h1> 
        <section>
            <h3 className={utilStyles.headingMd}>2023</h3>
            <ul className={utilStyles.customList}>
                <li className={utilStyles.ListItems}>
                    <strong>Backend</strong>
                    <p> Completed The Odin Project's <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs">Node JS</a> module, great resource to get into Backend Developement.
                    </p>

                </li>
                <li className={utilStyles.ListItems}>
                    <strong>Colloborative Project</strong>
                    <p> After learning the HTML,CSS,Javscript and React and completing doing dozens of JS and React projects, I and Bsf decide to start working on our Personal Project
                    </p>     
                </li>
                <li className={utilStyles.ListItems}>
                    <strong>Frontend</strong>
                    <p> Completed The Odin Project's <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/react">React JS</a> module.
                    </p>     
                </li>
            </ul>
        </section>
        <hr style={{ color: "#e4e4e48c" }} />
        <section>
            <h3 className={utilStyles.headingMd}>2022</h3>
            <ul className={utilStyles.customList}>
            <li className={utilStyles.ListItems}>
                    <strong>Developement</strong>
                    <p>Best Friend introduced me to <a href="https://theodinproject.com/">The Odin Project</a>, a great resource to get into Full Stack web Developement
                    We both start our developement journey.
                    </p>
                </li>
                <li className={utilStyles.ListItems}>
                    <strong>Programming</strong>
                    <p> Started my programming journey with Prateek Narang's <a href="https://www.scaler.com/topics/course/cpp-beginners/">C++</a> beginners guide.
                    </p>    
                </li>
                <li className={utilStyles.ListItems}>
                        <strong>College</strong>
                        <p>Studying computer science engineering with specialization in Artificial intelligence
                            Started going to college. Made a friend there, another delusional ahole like me.
                            then made another friend and another. That about it, way over my socialising energy.
                        </p> 
                </li>
            </ul>
        </section>
        <hr style={{ color: "#e4e4e48c" }} />
      </section>
      </div>
    </Layout>
  );
}

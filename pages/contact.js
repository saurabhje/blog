import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact Je</title>
            </Head>
            <div className={utilStyles.headingMd}>
                <p>If reaching out to me is the highlight of your day, then I must say, you're setting the bar pretty low. But hey, we've all been there—rock bottom is just another solid foundation, right? Whether it's a cry for help or just a desperate attempt to add a dash of excitement to your life, I'm here for you. After all, if contacting me is your solution, you're probably facing challenges that even Google couldn't comprehend. Kudos to you, my friend. Life's a rollercoaster, and apparently, I'm the unexpected plot twist you never knew you needed.
                </p>
                <section className={utilStyles.margin}>
                    <h1>📱Contact Me </h1>
                    <ul className={utilStyles.customList}>
                        <li className={utilStyles.ListItems}>
                            <strong>Email</strong>: saurabhjesingh@gmail.com
                        </li>
                        <li className={utilStyles.ListItems}>
                            <strong>Github</strong>: <a href="https://github.com/saurabhje">SaurabhJe</a>
                        </li>
                        <li className={utilStyles.ListItems}>
                            <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/saurabhje/">SaurabhJe</a>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    )
}
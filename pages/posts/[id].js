import Layout from "../../components/layout";
import { client } from "../../lib/sanity";
import { getAllIds } from "../../lib/post";

export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    const query = `*[_type == "post" && id == $id][0]`;
    const postData = await client.fetch(query, { id: params.id });
    return {
      props: {
        post: postData,
      },
    };
  }

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }
  
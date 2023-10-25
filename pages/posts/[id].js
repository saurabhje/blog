import Layout from "../../components/layout";
import { getAllIds , getIdPost} from "../../lib/post";

export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    const postData = await getIdPost(params.id);
    return {
      props: {
         postData
      },
    };
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.content}
        <br />
        {postData.date}

      </Layout>
    );
  }
  
  
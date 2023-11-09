import Client from "./sanity";
import { Post } from "./interface";
import ImageUrlBuilder  from "@sanity/image-url";

const builder = ImageUrlBuilder(Client);

export const getSortedPostData = async () => {
  async function getData() {
    const query = '*[_type == "project"] | order(date desc)';
    const data = await Client.fetch(query);
    return data;
  }
  const data = await getData() as Post[];
  return data;
};


export const getAllIds = async () => {
  const query = '*[_type == "project"].slug';
  const data = await Client.fetch(query);
  const paths = data.map((slug: any) => ({
    params: {
      slug :  slug.current,
    },
  }));
  return paths;
}

export const getIdPost = async (slug: any) => {
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  const postData = await Client.fetch(query, { slug: slug });
  return postData as Post;
}

export function urlFor(source: any) {
  return builder.image(source);
}
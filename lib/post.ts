import { client } from "./sanity";
import { Post } from "./interface";

export const getSortedPostData = async () => {
  async function getData() {
    const query = '*[_type == "post"]';
    const data = await client.fetch(query);
    return data;
  }
  const data = await getData() as Post[];
  return data;
};

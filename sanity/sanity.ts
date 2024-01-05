import { createClient } from "next-sanity";
const projectId = 'zwfkz1cc'; //its okay you can steal it.
const dataset = 'production';
const apiVersion = '2023-10-24';

const Client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});
export default Client;
import { createClient } from "next-sanity"
const project = process.env['PROJECT_ID'];
const projectId = project
const dataset = 'production'
const apiVersion = '23-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

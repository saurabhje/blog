import {defineConfig} from 'sanity'
import {deskTool } from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import project from './sanity/schemas/project-schema';


const config = defineConfig({
  name: 'default',
  title: 'Je-blog',

  projectId: 'zwfkz1cc',
  dataset: 'production',
  apiVersion : '2023-10-24',
  plugins: [deskTool() , visionTool()],
  useCdn: false,
  basePath: '/admin',
  schema: { types: [project] }
})

export default config;
import {defineConfig} from 'sanity'
import {deskTool } from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import project from './sanity/schemas/project-schema';
import timeLine from './sanity/schemas/TimeLine';


const config = defineConfig({
  name: 'default',
  title: 'Je-blog',

  projectId: 'zwfkz1cc',
  dataset: 'production',
  apiVersion : '2023-10-24',
  plugins: [deskTool() , visionTool()],
  useCdn: true,
  basePath: '/admin',
  schema: { types: [project, timeLine] }
})

export default config;
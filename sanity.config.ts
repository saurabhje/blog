import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

const config = defineConfig({
  name: 'default',
  title: 'Je-blog',

  projectId: 'zwfkz1cc',
  dataset: 'production',
  apiVersion : '2023-10-24',
  plugins: [deskTool()],
  
  basePath: '/admin'
})

export default config;
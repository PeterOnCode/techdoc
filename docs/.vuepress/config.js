import { defineUserConfig } from 'vuepress'

let sourceDir = '.';
export default defineUserConfig({
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: `${sourceDir}/dist`,
    open: true
})

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Greenter',
    image: 'https://github.com/giansalex/greenter/raw/master/docs/img/logo.png',
    infoLink: 'https://giansalex.github.io/greenter/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Sunat Docs ' /* title for your website */,
  tagline: 'Documentación de Facturación Electrónica',
  url: 'https://giansalex.github.io/sunat-docs' /* your website url */,
  baseUrl: '/sunat-docs/' /* base url for your project */,
  projectName: 'sunat-docs',
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#5d3e63',
    secondaryColor: '#735d77',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' SUNAT',
  organizationName: 'giansalex', // or set an env variable ORGANIZATION_NAME
  projectName: 'sunat-docs', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/giansalex/sunat-docs',
};

module.exports = siteConfig;

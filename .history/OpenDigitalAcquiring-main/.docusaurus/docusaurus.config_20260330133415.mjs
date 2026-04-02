// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Digital Acquiring',
  tagline: 'API Documentation for OpenAcquiring',
  favicon: 'img/Open-Acquiring.png',

  url: 'https://paysyslabs.github.io',
  baseUrl: '/OpenDigitalAcquiring/',

  organizationName: 'paysyslab',
  projectName: 'OpenDigitalAcquiring',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  plugins: ['docusaurus-plugin-image-zoom'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    zoom: {
      selector: '.theme-doc-markdown img, article img',
      config: {
        margin: 24,
        background: '#000',
      },
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    navbar: {
      logo: {
        alt: 'Paysys Labs',
        src: 'img/Open-Acquiring.png',
        style: {
          width: '220px',
          height: 'auto',
        },
      },
      items: [
        // ✅ Each navbar item now points to its own dedicated sidebar
        // Clicking "Merchant Management" will ONLY show the MerchantManagementSidebar
        {
          type: 'docSidebar',
          sidebarId: 'MerchantManagementSidebar',
          label: 'Merchant Management',
          position: 'left',
        },
        // Clicking "Merchant Portal" will ONLY show the MerchantPortalSidebar
        {
          type: 'docSidebar',
          sidebarId: 'MerchantPortalSidebar',
          label: 'Merchant Portal',
          position: 'left',
        },
        // Clicking "Merchant App" will ONLY show the MerchantAppSidebar
        {
          type: 'docSidebar',
          sidebarId: 'MerchantAppSidebar',
          label: 'Merchant App',
          position: 'left',
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs.`,
    },

    stylesheets: [
      'https://cdn.jsdelivr.net/npm/medium-zoom@1.0.0/dist/medium-zoom.css',
    ],
  },
};

export default config;
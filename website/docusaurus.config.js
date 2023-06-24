// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Critical Raw Materials',
  tagline: 'Scaling traceability and transparency through decentralisation and digital standards',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://uncefact.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uncefact', // Usually your GitHub org/user name.
  projectName: 'project-crm', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/index.scss')
          ]
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      slackLink: 'https://uncefact.slack.com/archives/C05AV647QKC',
      colorMode: {
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: 'img/un-crm-social-card.jpg',
      navbar: {
        title: 'CRM',
        logo: {
          alt: 'United Nations Critical Raw Materials',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/about', label: 'About the project', position: 'right'},
          {to: '/docs/deliverables', label: 'Deliverables', position: 'right'},
          {to: '/docs/standards', label: 'Standards', position: 'right'},
          {to: '/docs/vocabulary', label: 'Vocabulary', position: 'right'},
          {to: '/docs/pilots', label: 'Pilots', position: 'right'},
          {
            href: 'https://uncefact.slack.com/archives/C05AV647QKC',
            position: 'right',
            html: '<svg class="icon icon-slack"><use xlink:href="#slack"></use></svg><span class="menu-item-name">Slack</span>',
            className: 'navbar-slack-link',
          },
          {
            href: 'https://github.com/uncefact/project-crm',
            html: '<svg class="icon"><use xlink:href="#github"></use></svg><span class="menu-item-name">Github</span>',
            className: 'navbar-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'Terms and Conditions of Use',
            to: '/terms',
          },
          {
            label: 'Privacy Notice',
            to: '/privacy',
          },
        ],
        copyright: `© United Nations Economic Commission for Europe`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;

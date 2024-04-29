// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const prismThemes = require("prism-react-renderer").themes;

const docsRouteBasePath = "/";

const searchOptions = {
  // `hashed` is recommended as long-term-cache of index file is possible.
  hashed: true,
  // For Docs using Chinese, The `language` is recommended to set to:
  // ```
  // language: ["en", "zh"],
  // ```
  docsRouteBasePath,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hub OS Documentation",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.hubos.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Hub-OS", // Usually your GitHub org/user name.
  projectName: "documentation-website", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  customFields: {
    NODE_ENV: process.env.NODE_ENV,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: docsRouteBasePath,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Hub-OS/documentation-website/tree/master/",
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: "My Site",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        // hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "client/packages",
            position: "left",
            label: "Client",
          },
          {
            type: "doc",
            docId: "server/minimal-setup",
            position: "left",
            label: "Server",
          },
          {
            href: "https://hubos.dev",
            label: "Website",
            position: "right",
          },
          {
            href: "https://github.com/Hub-OS/documentation-website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["lua", "toml"],
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      searchOptions,
    ],
  ],
};

module.exports = config;

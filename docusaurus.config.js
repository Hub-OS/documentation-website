// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const searchOptions = {
  // `hashed` is recommended as long-term-cache of index file is possible.
  hashed: true,
  // For Docs using Chinese, The `language` is recommended to set to:
  // ```
  // language: ["en", "zh"],
  // ```
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Real-PET",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/documentation-website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Real-PET", // Usually your GitHub org/user name.
  projectName: "documentation-website", // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: "warn",
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
            href: "https://github.com/Real-PET/documentation-website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Plant-Genetix Research",
  tagline: "Advancing Plant Science for the Next Generation",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // production site URL
  url: "https://plant-genetix.com",
  baseUrl: "/",

  //nGitHub repo info (used by GH Pages action)
  organizationName: "goweki",
  projectName: "plant-genetix", // repo name

  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/NL_social_banner.jpg",
    navbar: {
      title: "Home",
      logo: {
        alt: "logo",
        src: "img/NL_symbol.svg",
      },
      items: [
        { to: "/about", label: "About", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {},
        {
          title: "Social media",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/nelsonlubanga/",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Documents",
              to: "/docs/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Plant-Genetix`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

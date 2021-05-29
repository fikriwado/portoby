module.exports = {
  siteMetadata: {
    title: `Fikri Wado`,
    specialist: `Front-end Developer`,
    description: `Hi, with about 5 years total experience in front end development, you can enjoy hiring me to solve your problem. I can help you, please invite me to start discussing your problem.`,
    keywords: `freelancer, front-end developer, expert front-end developer freelancer, tutorial front-end developer, influencer front-end developer`,
    author: `@fikriwado`,
    siteURL: `https://portoby.fikriwado.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              qualiy: 95,
              linkImagesToOriginal: false,
              withWebp: true,
              withAvif: true
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FikriWado`,
        short_name: `FikriWado`,
        start_url: `/`,
        background_color: `#F3F4F6`,
        theme_color: `#F3F4F6`,
        display: `standalone`,
        icon: `src/images/profile.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fira code\:400,600,700`,
          `saira\:400,500,600`,
        ],
        display: 'swap'
      }
    }
  ],
}

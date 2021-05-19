module.exports = {
  siteMetadata: {
    title: `Fikri Wado`,
    specialist: `Front-end Development`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-postcss'
  ],
}

module.exports = {
    siteMetadata: {
        title: "My Gatsby Site",
        description: "Hello Gatsby",
    },
    plugins: [
        {
            resolve: 'gatsby-source-rss-feed',
            options: {
                url: 'https://qiita.com/kapiecii/feed',
                name: 'Qiita',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'Works',
                path: `${__dirname}/src/works.yaml`,
            },
        },
        'gatsby-transformer-yaml',
        'gatsby-plugin-react-helmet',
    ],
}
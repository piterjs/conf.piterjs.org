module.exports = {
	siteMetadata: {
		title: `PiterJS conf`,
		description: `PiterJS conference`,
		author: `@piterjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
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
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-typescript`,
		`gatsby-plugin-tslint`,
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Montserrat\:400,500,600,700&display=swap&subset=cyrillic`],
			},
		},
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				sourceMap: false,
				autoLabel: "process.env.NODE_ENV !== 'production'",
				labelFormat: '[local]',
				cssPropOptimization: true,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};

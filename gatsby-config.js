module.exports = {
	siteMetadata: {
		title: `PiterJS conf 2019`,
		description: `PiterJS - cообщество c берегов Невы, проводим ежемесячные митапы вокруг языка JavaScript и всего, что с ним связано. Мы помогаем знаниям быть бесплатными и свободными. Организуем ежемесячные встречи разработчиков для распространения знаний и обмена опытом, рассказываем о боли и кайфе JavaScript-программирования.`,
		image: '/promo.jpg',
		url: 'https://conf.piterjs.org/',
		author: `@piterjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./static/data/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `PiterJS conf 2019`,
				short_name: `PiterJS conf 2019`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icons: [
					{
						src: '/logo/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/logo/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
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
		// {
		// 	resolve: `gatsby-plugin-google-fonts`,
		// 	options: {
		// 		fonts: [`Montserrat\:400,500,600,700&display=swap&subset=cyrillic`],
		// 	},
		// },
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				sourceMap: false,
				autoLabel: "process.env.NODE_ENV !== 'production'",
				labelFormat: '[local]',
				cssPropOptimization: true,
			},
		},
		// {
		// 	resolve: "gatsby-plugin-preconnect",
		// 	options: {
		// 		domains: [
		// 			"https://fonts.gstatic.com"
		// 		]
		// 	}
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		`gatsby-plugin-remove-serviceworker`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-97990001-2",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				// anonymize: true,
				// Setting this parameter is also optional
				// respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Enables Google Optimize using your container Id
				// optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				// Enables Google Optimize Experiment ID
				// experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
				// Set Variation ID. 0 for original 1,2,3....
				// variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: "conf.piterjs.org",
			},
		},
	],
};

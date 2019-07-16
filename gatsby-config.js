module.exports = {
	siteMetadata: {
		title: `PiterJS conf 2019`,
		description: `PiterJS - cообщество c берегов Невы, проводим ежемесячные митапы вокруг языка JavaScript и всего, что с ними связано. Мы помогаем знаниям быть бесплатными и свободными. Организуем ежемесячные встречи разработчиков для распространения знаний и обмена опытом, рассказываем о боли и кайфе JavaScript-программирования.`,
		image: "/promo.jpg",
		url: "https://conf.piterjs.org/",
		author: `@piterjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
				autoLabel: 'process.env.NODE_ENV !== \'production\'',
				labelFormat: '[local]',
				cssPropOptimization: true,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};

import {Fragment, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Helmet from 'react-helmet';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule/schedule.component';
import {Partners} from '../partners/partners/partners.component';
import {Footer} from '../footer/footer.component';
import {About} from '../about/about.component';
import {Become} from '../become/become.component';
import {HelmetTO, LinksTO} from '../../view-models/data.view-model';
import {Speakers} from '../speakers/speakers.component';
import {Organizators} from '../organizators/organizators.component';
// import {Map} from '../map/map.component';

const landingQuery = graphql`
	query LandingQuery {
		dataJson {
			helmet {
				landing {
					description
					title
				}
			}
			links {
				mailTo
				signUpLink
			}
		}
	}
`;

export const Landing = () => {
	const {dataJson: data} = useStaticQuery(landingQuery);
	const helmet: HelmetTO = data.helmet;
	const links: LinksTO = data.links;

	return (
		<Fragment>
			<Helmet title={helmet.landing.title}>
				<meta name='description' content={helmet.landing.description} />
				<html lang='ru' />
			</Helmet>
			<Header />
			<Promo />
			<About />
			<Speakers />
			<Schedule />
			<Organizators />
			<Partners />
			<Become link={{href: `mailto:${links.mailTo}`, target: '_self'}} buttonText={'Стать партнером'} />
			{/*<Map />*/}
			<Footer />
		</Fragment>
	);
};

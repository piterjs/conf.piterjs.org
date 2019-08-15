import {memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {PartnerTO} from '../../../view-models/data.view-model';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/container.component';
import {BlockHeading} from '../../ui-kit/block-heading/block-heading.component';
import {Partner} from '../partner/partner.component';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const PartnersStyled = styled.section`
	// padding: 40px 0 60px;

	${mediaMd} {
		// padding: 100px 0;
	}
`;
const ContentStyled = styled.div``;
const BlockHeadingStyled = styled(BlockHeading)`
	// margin-bottom: 0;

	${mediaMd} {
		// margin-bottom: 0;
	}
`;
const GroupStyled = styled.div`
	& + & {
		margin-top: 30px;

		${mediaMd} {
			margin-top: 100px;
		}
	}
`;
const TitleStyled = styled.h3`
	font-size: 24px;
	font-weight: 600;
	padding-left: 30px;
	border-bottom: 4px solid var(--yellow);
	margin-bottom: 15px;

	${mediaMd} {
		font-size: 60px;
		border: none;
		margin-bottom: 30px;
		padding-left: 0;
	}
`;
const PartnerStyled = styled(Partner)`
	margin: 20px 15px;
	${mediaMd} {
		padding: 0;
	}

	& + & {
		${mediaMd} {
			margin-left: 45px;
		}
	}
`;
const GroupPartnersStyled = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	${mediaMd} {
		flex-wrap: wrap;
	}
`;
//#endregion

interface PartnersProps {
	className?: string;
}

const partnersQuery = graphql`
	query PartnersQuery {
		dataJson {
			partners {
				image
				link
				name
			}
		}
	}
`;

export const Partners = memo<PartnersProps>(({className}) => {
	const {dataJson: data} = useStaticQuery(partnersQuery);
	const partners: PartnerTO[] = data.partners;

	return (
		<PartnersStyled id={'partners'}>
			<Container>
				<ContentStyled>
					<BlockHeadingStyled>Партнеры</BlockHeadingStyled>
					<GroupPartnersStyled>
						{partners.map(partner => (
							<PartnerStyled partner={partner} key={partner.name} />
						))}
					</GroupPartnersStyled>
				</ContentStyled>
			</Container>
		</PartnersStyled>
	);
});

import {memo} from 'react';
import * as React from 'react';
import {DataTO} from '../../../view-models/data.view-model';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/container.component';
import {BlockHeading} from '../../ui-kit/block-heading/block-heading.component';
import {groupByLevel, sortSponsorGroups} from './sponsors.model';
import {compose} from 'fp-ts/lib/function';
import {Sponsor} from '../sponsor/sponsor.component';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const SponsorsStyled = styled.section`
	padding: 40px 0 60px;

	${mediaMd} {
		padding: 220px 0;
	}
`;
const ContentStyled = styled.div``;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 50px;

	${mediaMd} {
		margin-bottom: 100px;
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
const SponsorStyled = styled(Sponsor)`
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
const GroupSponsorsStyled = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	${mediaMd} {
		flex-wrap: wrap;
	}
`;
//#endregion

interface SponsorsProps {
	data: DataTO;
	className?: string;
}

export const Sponsors = memo<SponsorsProps>(({className, data}) => (
	<SponsorsStyled id={'sponsors'}>
		<Container>
			<ContentStyled>
				<BlockHeadingStyled>Partners</BlockHeadingStyled>
				<GroupSponsorsStyled>
					{data.sponsors.map(sponsor => (
						<SponsorStyled sponsor={sponsor} key={sponsor.name} />
					))}
				</GroupSponsorsStyled>
			</ContentStyled>
		</Container>
	</SponsorsStyled>
));

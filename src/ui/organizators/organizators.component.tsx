import {FC, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {Speaker} from '../speakers/speaker/speaker.component';
import {clamp} from '../../utils/number.utils';
import {SpeakerTO} from '../../view-models/data.view-model';

//#region styled
const OrgsStyled = styled.section`
	// padding-bottom: 40px;
	// padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 35px;

	${mediaMd} {
		margin-bottom: 18px;
	}
`;
const OrgsListStyled = styled.div<{count: number}>`
	grid-gap: 10px;
	margin-bottom: 35px;

	${mediaMdX} {
		display: grid;
		grid-template-columns: repeat(${({count}) => clamp(count, 1, 3)}, 1fr);
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(${({count}) => clamp(count, 1, 4)}, 1fr);
	}

	${mediaLg} {
		grid-template-columns: repeat(${({count}) => clamp(count, 1, 5)}, 1fr);
	}
`;
//#endregion

interface OrgsProps {
	className?: string;
}

const orgsQuery = graphql`
    query OrgsQuery {
        dataJson {
            organizators {
                firstName
                id
                lastName
                photo {
                    alt
                    src
                }
                socials {
                    link
                    name
                }
            }
        }
    }
`;

export const Organizators: FC<OrgsProps> = memo(({className}) => {
	const {dataJson: data} = useStaticQuery(orgsQuery);
	const list: SpeakerTO[] = data.organizators;
	return (
		<OrgsStyled className={className} id={'orgs'}>
			<Container>
				<BlockHeadingStyled>Организаторы</BlockHeadingStyled>
				<OrgsListStyled count={list.length} id={'org_list'}>
					{list
						.filter(s => s.id !== 'speakerX')
						.map(speaker => (
							<Speaker speaker={speaker} key={speaker.id} />
						))}
				</OrgsListStyled>
			</Container>
		</OrgsStyled>
	);
});


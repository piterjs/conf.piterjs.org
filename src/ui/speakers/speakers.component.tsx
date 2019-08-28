import {FC, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {SpeakerTO} from '../../view-models/data.view-model';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {Speaker} from './speaker/speaker.component';
import {clamp} from '../../utils/number.utils';

//#region styled
const SpeakersStyled = styled.section`
	// padding-bottom: 40px;
	// padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 35px;

	${mediaMd} {
		margin-bottom: 18px;
	}
`;
const SpeakersListStyled = styled.div<{count: number}>`
	grid-gap: 10px;
	margin-bottom: 35px;

  ${mediaMd} {
    display: grid;
    grid-template-columns: repeat(${({count}) => clamp(count, 1, 2)}, 1fr);
  }

  ${mediaMdX} {
    grid-template-columns: repeat(${({count}) => clamp(count, 1, 3)}, 1fr);
  }

  ${mediaLg} {
    grid-template-columns: repeat(${({count}) => clamp(count, 1, 4)}, 1fr);
  }
`;
//#endregion

interface SpeakersProps {
	className?: string;
}

const speakersQuery = graphql`
    query SpeakersQuery {
        dataJson {
            speakers {
                firstName
                about
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

export const Speakers: FC<SpeakersProps> = memo(({className}) => {
	const {dataJson: data} = useStaticQuery(speakersQuery);
	const speakers: SpeakerTO[] = data.speakers;

	return (
		<SpeakersStyled className={className} id={'speakers'}>
			<Container>
				<BlockHeadingStyled>Спикеры</BlockHeadingStyled>
				<SpeakersListStyled count={speakers.length} id={'speaker_lisk'}>
					{speakers
						.filter(s => s.id !== 'speakerX')
						.map(speaker => (
							<Speaker speaker={speaker} key={speaker.id} />
						))}
				</SpeakersListStyled>
			</Container>
		</SpeakersStyled>
	);
});

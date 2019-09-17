import {FC, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {EventTO} from '../../view-models/data.view-model';
import {Paragraph} from '../ui-kit/paragraph/paragraph.component';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {clamp} from '../../utils/number.utils';
import {ImageGallery} from '../image-gallery/image-gallery/image-gallery.component';

//#region styled
const AboutStyled = styled.section`
	// padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 35px;
	word-break: break-word;

	${mediaMd} {
		margin-bottom: 18px;
	}
`;
const TextStyled = styled.div`
	${mediaMd} {
		margin-bottom: 35px;
	}
`;
const ParagraphStyled = styled(Paragraph)`
	margin-bottom: 20px;
	line-height: 1.5;
`;
const ImageGalleryStyled = styled(ImageGallery)<{count: number}>`
	display: none;
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

interface AboutProps {
	className?: string;
}

const aboutQuery = graphql`
	query AboutQuery {
		dataJson {
			event {
				about
				photos {
					alt
					src
					srcLarge
				}
			}
		}
	}
`;

export const About: FC<AboutProps> = memo(({className}) => {
	const {dataJson: data} = useStaticQuery(aboutQuery);
	const event: EventTO = data.event;

	return (
		<AboutStyled className={className} id={'about'}>
			<Container>
				<BlockHeadingStyled>О&nbsp;конференции</BlockHeadingStyled>
				<TextStyled>
					{event.about.map((about, i) => (
						<ParagraphStyled key={i}>{about}</ParagraphStyled>
					))}
				</TextStyled>
        <ImageGalleryStyled count={data.event.photos.length} images={event.photos}/>
			</Container>
		</AboutStyled>
	);
});

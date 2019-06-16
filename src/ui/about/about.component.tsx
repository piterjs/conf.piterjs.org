import {FC, memo} from 'react';
import * as React from 'react';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {DataTO} from '../../view-models/data.view-model';
import {Paragraph} from '../ui-kit/paragraph/paragraph.component';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {clamp} from '../../utils/number.utils';
import {isEmpty} from 'fp-ts/lib/Array';
import {not} from 'fp-ts/lib/function';

//#region styled
const AboutStyled = styled.section`
	padding-bottom: 40px;
	padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 35px;

	${mediaMd} {
		margin-bottom: 18px;
	}
`;
const TextStyled = styled.div`
	margin-bottom: 50px;

	${mediaMd} {
		margin-bottom: 35px;
	}
`;
const ParagraphStyled = styled(Paragraph)`
	margin-bottom: 20px;
`;
const PhotosStyled = styled.div<{count: number}>`
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
const PhotoStyled = styled.img`
	width: 100%;
`;
//#endregion

interface AboutProps {
	className?: string;
	data: DataTO;
}

export const About: FC<AboutProps> = memo(({className, data}) => (
	<AboutStyled className={className}>
		<Container>
			<BlockHeadingStyled>About</BlockHeadingStyled>
			<TextStyled>
				{data.event.about.map((about, i) => (
					<ParagraphStyled key={i}>{about}</ParagraphStyled>
				))}
			</TextStyled>
			{data.event.photos
				.filter(not(isEmpty))
				.map(photos => (
					<PhotosStyled count={photos.length}>
						{photos.map((photo, i) => (
							<PhotoStyled {...photo} key={i} />
						))}
					</PhotosStyled>
				))
				.toNullable()}
		</Container>
	</AboutStyled>
));

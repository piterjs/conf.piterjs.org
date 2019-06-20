import {FC, memo} from 'react';
import * as React from 'react';
import {DataTO} from '../../../view-models/data.view-model';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/container.component';
import {BlockHeading} from '../../ui-kit/block-heading/block-heading.component';
import {Article} from '../article/article.component';
import {findFirst} from 'fp-ts/lib/Array';
import {ComingOut} from '../../coming-out/coming-out.component';

//#region styled
const ScheduleStyled = styled.section``;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 90px;
`;
//#endregion

interface ScheduleProps {
	className?: string;
	data: DataTO;
}

export const Schedule: FC<ScheduleProps> = memo(({className, data}) => {
	const futureData = data.event.articles.map(article => {
		const speech = findFirst(data.articles, item => item.id === article.articleId);
		const speaker = article.speakerId.chain(speakerId => findFirst(data.speakers, speaker => speaker.id === speakerId));
		return speech
			.map(speech => (
				<Article key={speech.id} time={article.time} title={speech.name} description={speech.description} speaker={speaker} />
			))
			.toNullable();
	});
	return (
		<ScheduleStyled>
			<Container>
				<BlockHeadingStyled>Schedule</BlockHeadingStyled>
				<ComingOut />
			</Container>
		</ScheduleStyled>
	);
});

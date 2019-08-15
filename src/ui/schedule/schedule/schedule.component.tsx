import {FC, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {EventTO, ArticleTO, SpeakerTO} from '../../../view-models/data.view-model';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/container.component';
import {BlockHeading} from '../../ui-kit/block-heading/block-heading.component';
import {Article} from '../article/article.component';
import {findFirst} from 'fp-ts/lib/Array';
import {fromNullable} from 'fp-ts/lib/Option';

//#region styled
const ScheduleStyled = styled.section`
	// padding-bottom: 40px;
	// padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)``;
//#endregion

interface ScheduleProps {
	className?: string;
}

const scheduleQuery = graphql`
	query ScheduleQuery {
		dataJson {
			articles {
				description
				id
				name
			}
			event {
				articles {
					articleId
					speakerId
					time
				}
			}
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

export const Schedule: FC<ScheduleProps> = memo(({className}) => {
	const {dataJson: data} = useStaticQuery(scheduleQuery);
	const event: EventTO = data.event;
	const articles: ArticleTO[] = data.articles;
	const speakers: SpeakerTO[] = data.speakers;

	return (
		<ScheduleStyled id={'schedule'}>
			<Container>
				<BlockHeadingStyled>Расписание</BlockHeadingStyled>
				{event.articles.map(article => {
					// tslint:disable
					const speech = findFirst(articles, item => item.id === article.articleId);
					// tslint:disable
					const speaker = fromNullable(article.speakerId).chain(speakerId =>
						findFirst(speakers, speaker => speaker.id === speakerId.toString()),
					);
					return speech
						.map(speech => (
							<Article
								key={speech.id}
								time={article.time}
								title={speech.name}
								description={speech.description}
								speaker={speaker}
							/>
						))
						.toNullable();
				})}
			</Container>
		</ScheduleStyled>
	);
});

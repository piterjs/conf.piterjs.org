import {SponsorLevelTO, SponsorTO} from '../../../view-models/data.view-model';
import {empty, findIndex, lookup, sort, updateAt} from 'fp-ts/lib/Array';
import {contramap, fromCompare} from 'fp-ts/lib/Ord';
import {Ordering} from 'fp-ts/lib/Ordering';
import {setoidString} from 'fp-ts/lib/Setoid';

interface SponsorGroup {
	title: SponsorLevelTO;
	sponsors: SponsorTO[];
}

export const groupByLevel = (sponsors: SponsorTO[]): SponsorGroup[] =>
	sponsors.reduce<SponsorGroup[]>(
		(acc, item) =>
			findIndex(acc, group => group.title === item.level)
				.chain(i =>
					lookup(i, acc)
						.map(group => ({
							...group,
							sponsors: group.sponsors.concat(item),
						}))
						.chain(group => updateAt(i, group, acc)),
				)
				.getOrElse(
					acc.concat({
						sponsors: [item],
						title: item.level,
					}),
				),
		empty,
	);

const compareSponsorLevel = (a: SponsorLevelTO, b: SponsorLevelTO): Ordering => {
	if (setoidString.equals(a, b)) {
		return 0;
	}
	switch (a) {
		case 'BRONZE':
			return -1;
		case 'SILVER':
			if (b === 'BRONZE') {
				return 1;
			}
			return -1;
		case 'GOLD':
			if (b === 'PLATINUM') {
				return -1;
			}
			return 1;
		case 'PLATINUM':
			return 1;
	}
};

const ordSponsorGroup = contramap<SponsorLevelTO, SponsorGroup>(group => group.title, fromCompare(compareSponsorLevel));
export const sortSponsorGroups = sort(ordSponsorGroup);

import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Icon} from '../icon/icon.component';
import {
	FacebookFooterIcon,
	GithubIcon,
	GoogleFooterIcon,
	LinkedInFooterIcon,
	OkFooterIcon,
	TelegramFooterIcon,
	TwitterFooterIcon,
	TwitterIcon,
	VkFooterIcon,
} from '../../../assets';
import styled from '@emotion/styled';

//#region styled
const SocialStyled = styled.a``;
//#endregion

export type SocialType = 'FACEBOOK' | 'GOOGLE' | 'GITHUB' | 'LINKED_IN' | 'TELEGRAM' | 'TWITTER' | 'VK' | 'OK';

interface SocialProps {
	type: SocialType;
	link: string;
	className?: string;
	isFooter?: boolean;
	about?: string;
}

export const Social: FC<SocialProps> = memo(({type, className, link, isFooter = false, about}) => (
	<SocialStyled
		href={link}
		className={className}
		target={'_blank'}
		aria-label={`Learn more on ${String(type).toLowerCase()} about ${about || 'this'}`}
		rel='noopener noreferrer'
	>
		<Icon svg={getIcon(isFooter, type)} />
	</SocialStyled>
));

function getIcon(isFooter: boolean, type: SocialType) {
	if (isFooter) {
		switch (type) {
			case 'FACEBOOK':
				return FacebookFooterIcon;
			case 'GOOGLE':
				return GoogleFooterIcon;
			case 'GITHUB':
				return Fragment;
			case 'LINKED_IN':
				return LinkedInFooterIcon;
			case 'TELEGRAM':
				return TelegramFooterIcon;
			case 'TWITTER':
				return TwitterFooterIcon;
			case 'VK':
				return VkFooterIcon;
			case 'OK':
				return OkFooterIcon;
		}
	}

	switch (type) {
		case 'FACEBOOK':
			return Fragment;
		case 'GOOGLE':
			return Fragment;
		case 'GITHUB':
			return GithubIcon;
		case 'LINKED_IN':
			return Fragment;
		case 'TELEGRAM':
			return Fragment;
		case 'TWITTER':
			return TwitterIcon;
		case 'VK':
			return Fragment;
		case 'OK':
			return Fragment;
	}
}

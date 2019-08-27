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
	MediumIcon,
	VkFooterIcon,
	VkIcon,
} from '../../../assets';
import styled from '@emotion/styled';

//#region styled
const SocialStyled = styled.a``;
//#endregion

export type SocialType = 'FACEBOOK' | 'GOOGLE' | 'GITHUB' | 'LINKED_IN' | 'TELEGRAM' | 'TWITTER' | 'VK' | 'OK' | 'MEDIUM';

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
		aria-label={`Learn more on ${getSocialName(type)} about ${about || 'it'}`}
		rel={'noopener noreferrer'}
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
			case 'MEDIUM':
				return MediumIcon;
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
		case 'MEDIUM':
			return MediumIcon;
		case 'VK':
			return VkIcon;
		case 'OK':
			return Fragment;
	}
}


function getSocialName(type: SocialType) {
	switch (type) {
		case 'FACEBOOK':
			return 'facebook';
		case 'GOOGLE':
			return 'google';
		case 'GITHUB':
			return 'github';
		case 'LINKED_IN':
			return 'linked in';
		case 'TELEGRAM':
			return 'telegram';
		case 'TWITTER':
			return 'twitter';
		case 'MEDIUM':
			return MediumIcon;
		case 'VK':
			return 'vk';
		case 'OK':
			return 'ok';
		default:
			return '';
	}
}

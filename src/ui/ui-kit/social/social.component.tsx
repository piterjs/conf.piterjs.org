import {FC, memo} from 'react';
import * as React from 'react';
import {Icon} from '../icon/icon.component';
import {GithubIcon, TwitterIcon} from '../../../assets';
import styled from '@emotion/styled';

//#region styled
const SocialStyled = styled.a``;
//#endregion

export type SocialType = 'TWITTER' | 'GITHUB' | 'VK' | 'FACEBOOK';

interface SocialProps {
	type: SocialType;
	link: string;
	className?: string;
}

export const Social: FC<SocialProps> = memo(({type, className, link}) => (
	<SocialStyled href={link} className={className} target={'_blank'}>
		{type === 'TWITTER' && <Icon svg={TwitterIcon} />}
		{type === 'GITHUB' && <Icon svg={GithubIcon} />}
	</SocialStyled>
));

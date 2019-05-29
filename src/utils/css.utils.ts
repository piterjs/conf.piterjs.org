import css from '@emotion/css';

export const transition = (...rules: string[]) => css`
	transition: ${rules.map(rule => `${rule} ease-out .3s `).join(', ')};
`;

export const buttonReset = css`
	background: none;
	border: none;
	padding: 0;
`;

export const linkReset = css`
	&,
	&:hover,
	&:active,
	&:visited {
		color: inherit;
		text-decoration: none;
	}
`;

export const inputReset = css`
	background: none;
	border: none;
	border-radius: 0;
	padding: 0;
`;

export const linkColor = (color: string) => css`
	&,
	&:hover,
	&:active,
	&:visited {
		color: ${color};
	}
`;

export const mediaMd = '@media (min-width: 640px)';
export const mediaMdX = '@media (min-width: 820px)';
export const mediaLg = '@media (min-width: 1280px)';

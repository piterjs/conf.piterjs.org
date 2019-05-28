import { ComponentType, FC, memo, ReactElement, SVGProps } from 'react';
import * as React from 'react';
import styled from '@emotion/styled';

//#region styled
const IconStyled = styled.i`
	display: flex;
	align-items: center;
	justify-content: center;

	& > svg {
		width: 100%;
		height: 100%;
		color: inherit;
		fill: currentColor;
	}
`;
//#endregion

interface IconProps {
	svg: ComponentType<SVGProps<SVGSVGElement>>;
	className?: string;
}
export const Icon: FC<IconProps> = memo(({ svg: Svg, className }) => (
	<IconStyled className={className}>
		<Svg />
	</IconStyled>
));

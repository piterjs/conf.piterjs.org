import * as React from 'react';
import styled from '@emotion/styled';
import {FC, memo} from 'react';
import {TriangleIcon} from '../../../assets/index';
import {Icon} from '../../ui-kit/icon/icon.component';

//#region styled
const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	user-select: none;
`;
const NextStyled = styled.div`
	right: 20px;
	color: rgba(255, 255, 255, 0.7);
	position: absolute;
	width: 40px;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
  justify-content: flex-end;
  
	&:hover {
		color: var(--yellow);
	}
`;
const PrevStyled = styled.div`
	left: 20px;
	transform: rotate(180deg);
	color: rgba(255, 255, 255, 0.7);
	position: absolute;
	width: 40px;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	&:hover {
		color: var(--yellow);
	}
`;
const ImageStyled = styled.img`
	width: auto;
	max-width: 50%;
	max-height: 60%;
	height: auto;
	display: block;
	cursor: pointer;
	user-select: none;

	&:hover + ${NextStyled} {
		color: var(--yellow);
	}
`;
//#endregion

interface ImageGalleryOverlayProps {
	isLast: boolean;
	isFirst: boolean;
	src: string;
	onNextClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
	onPrevClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
	onOverlayClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
	className?: string;
}

export const ImageGalleryOverlay: FC<ImageGalleryOverlayProps> = memo(
	({src, isLast, isFirst, onNextClick, onPrevClick, onOverlayClick, className}) => {
		return (
			<OverlayStyled className={className} onClick={onOverlayClick}>
				{!isFirst && (
					<PrevStyled onClick={onPrevClick}>
						<Icon svg={TriangleIcon} />
					</PrevStyled>
				)}
				<ImageStyled onClick={onNextClick} src={src}></ImageStyled>
				{!isLast && (
					<NextStyled onClick={onNextClick}>
						<Icon svg={TriangleIcon} />
					</NextStyled>
				)}
			</OverlayStyled>
		);
	},
);

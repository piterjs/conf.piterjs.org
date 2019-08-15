import {FC} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {Lazy} from 'fp-ts/lib/function';

//#region styled
const BurgerStyled = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;
const ButtonLineStyled = styled.div<{isOpened: boolean}>`
	&,
	&:before,
	&:after {
		background-color: var(--black);
		position: absolute;
		width: 30px;
	}

	& {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: ${({isOpened}) => (isOpened ? 0 : 2)}px;
	}

	&:before,
	&:after {
		content: '';
		${({isOpened}) => (isOpened ? 'left: 50%' : 'left: 0')};
		height: 2px;
		transform-origin: center;
	}

	&:before {
		${({isOpened}) => !isOpened && 'top: -8px'};
		${({isOpened}) => isOpened && 'transform: translate(-50%, -50%) rotate(45deg)'};
	}

	&:after {
		${({isOpened}) => !isOpened && 'bottom: -8px'};
		${({isOpened}) => isOpened && 'transform: translate(-50%, -50%) rotate(-45deg)'};
	}
`;
//#endregion

interface BurgerProps {
	className?: string;
	isOpened: boolean;
	onClick: Lazy<void>;
}

export const Burger: FC<BurgerProps> = ({className, isOpened, onClick}) => (
	<BurgerStyled className={className} onClick={onClick} title="menu">
		<ButtonLineStyled isOpened={isOpened} />
	</BurgerStyled>
);

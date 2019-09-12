import * as React from 'react';
import styled from '@emotion/styled';

const ImageStyled = styled.img`
	width: 100%;
	cursor: zoom-in;
`;

export interface ModalProps {
	isOpened: boolean;
	srcSmall: string;
	srcLarge: string;
	alt: string;
	className?: string;
}

interface ModalImageProps {
	src: string;
	alt: string;
	id: number;
	className?: string;
	srcLarge?: string;
	onClick?: (key: number) => any;
}

export class ImageGalleryItem extends React.Component<ModalImageProps> {
	constructor(props: ModalImageProps) {
		super(props);
	}

	handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!this.props.onClick) {
			return;
		}
		this.props.onClick(this.props.id);
	};

	render(): React.ReactNode {
		return <ImageStyled onClick={this.handleClick} className={this.props.className} src={this.props.src} alt={this.props.alt} />;
	}
}

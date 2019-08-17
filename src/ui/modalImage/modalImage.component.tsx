import * as React from 'react';
import styled from '@emotion/styled';

const ModalStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 999;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const ImageStyled = styled.img`
	max-width: 75%;
	max-height: 75%;
`;

const ModalImageStyled = styled.div`
	cursor: pointer
`;

export interface ModalProps {
	isOpened: boolean;
	srcSmall: string;
	srcLarge: string;
	alt: string;
	className?: string;
}

interface ModalImageState {
	isOpened: boolean;
}

interface ModalImageProps {
	src: string;
	alt: string;
	className?: string;
	srcLarge?: string;
}

export class ModalImage extends React.Component<ModalImageProps> {
	state: ModalImageState;

	constructor(props: ModalImageProps) {
		super(props);

		this.state = {
			isOpened: false,
		};
	}

	showModal = (): void => {
		this.setState({
			isOpened: true,
		});
	};

	closeModal = (): void => {
		this.setState({
			isOpened: false,
		});
	};

	render(): React.ReactNode {
		let modalComponent: JSX.Element | null = null
		if (this.state.isOpened) {
			modalComponent = (
				<ModalStyled onClick={this.closeModal}>
					<ImageStyled src={this.props.srcLarge || this.props.src} alt={this.props.alt} />
				</ModalStyled>
			);
		}

		return (
			<ModalImageStyled>
				<img className={this.props.className} src={this.props.src} alt={this.props.alt} onClick={this.showModal} />
				{modalComponent}
			</ModalImageStyled>
		);
	}
}

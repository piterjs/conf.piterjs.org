import * as React from 'react';
import {ImageGalleryItem} from '../image-gallery-item/image-gallery-item';
import {ImageGalleryOverlay} from '../image-gallery-overlay/image-gallery-overlay.component';

interface ImageGalleryProps {
	images: Image[];
	className?: string;
}

interface ImageGalleryState {
	isOpened: boolean;
	activeIndex: number;
}

interface Image {
	alt: string;
	src: string;
	srcLarge?: string;
}

export class ImageGallery extends React.Component<ImageGalleryProps> {
	state: ImageGalleryState;

	constructor(props: ImageGalleryProps) {
		super(props);

		this.state = {
			isOpened: false,
			activeIndex: 0,
		};
	}

	onImageClick = (id: number): void => {
		this.setState({
			isOpened: true,
			activeIndex: id,
		});
	};

	onOverlayClick = (): void => {
		this.setState({
			isOpened: false,
		});
	};

	onNextClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		event.stopPropagation();

		const nextIndex = Math.min(this.state.activeIndex + 1, this.props.images.length - 1);
		this.setState({activeIndex: nextIndex});
	};

	onPrevClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		event.stopPropagation();

		const prevIndex = Math.max(this.state.activeIndex - 1, 0);
		this.setState({activeIndex: prevIndex});
	};

	render(): React.ReactNode {
		// Create Overlay
		let overlay: JSX.Element | null = null;
		if (this.state.isOpened) {
			const img = this.props.images[this.state.activeIndex];
			overlay = (
				<ImageGalleryOverlay
					src={img.srcLarge || img.src}
					onNextClick={this.onNextClick}
					onPrevClick={this.onPrevClick}
					onOverlayClick={this.onOverlayClick}
					isFirst={this.state.activeIndex === 0}
					isLast={this.state.activeIndex + 1 === this.props.images.length}
				/>
			);
		}

		// Images list
		const images = this.props.images.map((img, i) => <ImageGalleryItem onClick={this.onImageClick} {...img} key={i} id={i} />);

		return (
			<div className={this.props.className}>
				{images}
				{overlay}
			</div>
		);
	}
}

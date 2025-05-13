import { Context2DLike } from '../types/canvas';
import { BoardingPass } from './boarding-pass';

export class RoundedCorner {
	private boardingPass: BoardingPass;

	private ctx: Context2DLike;

	private width: number;

	private height: number;

	private color: string;

	constructor(
		boardingPass: BoardingPass,
		width: number,
		height: number,
		color: string,
	) {
		this.boardingPass = boardingPass;
		this.ctx = boardingPass.ctx;
		this.width = width;
		this.height = height;
		this.color = color;
	}
	public draw() {
		const { padding, roundedCornerRadius } = this.boardingPass;
		const { width, height } = this;
		const oppositeRaus = 10;

		this.ctx.beginPath();

		const startPoint = { x: padding + roundedCornerRadius, y: padding };
		this.ctx.moveTo(startPoint.x, startPoint.y);
		this.ctx.quadraticCurveTo(
			padding,
			padding,
			padding,
			padding + roundedCornerRadius,
		);
		this.ctx.lineTo(padding, padding + height);
		this.ctx.lineTo(padding + width - oppositeRaus, padding + height);
		this.ctx.quadraticCurveTo(
			padding + width,
			padding + height,
			padding + width,
			padding + height - oppositeRaus,
		);
		this.ctx.lineTo(padding + width, padding);
		this.ctx.lineTo(startPoint.x, startPoint.y);

		this.ctx.shadowColor = 'transparent';
		this.ctx.closePath();
		this.ctx.fillStyle = this.color;
		this.ctx.fill();

		this.drawLogo();
	}

	private drawLogo() {
		const fontSize = 28;
		const fontFamily = 'Arial';
		const fontWeight = 'bold';
		const fontStyle = 'italic';
		const fontColor = 'white';

		this.ctx.font = `${fontWeight} ${fontStyle} ${fontSize}px ${fontFamily}`;
		this.ctx.fillStyle = fontColor;
		this.ctx.fillText(
			'Techport',
			this.boardingPass.padding + 16,
			this.boardingPass.padding + this.height - fontSize / 2,
		);
	}
}

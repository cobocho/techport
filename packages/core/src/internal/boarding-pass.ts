import type { CanvasLike, Context2DLike } from '../types/canvas';
import { getCorner } from '../utils/getCorner';
import { RoundedCorner } from './rounded-corner';

export class BoardingPass {
	public canvas: CanvasLike;

	public ctx: Context2DLike;

	public width = 700;

	public height = 300;

	public padding = 20;

	public roundedCornerRadius = 20;

	private roundedCorners: RoundedCorner;

	constructor(canvas: CanvasLike) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d') as Context2DLike;
		this.setLayoutSize();
		this.roundedCorners = new RoundedCorner(this, 160, 50, 'black');
	}

	public draw() {
		this.drawTicketPaper();
		this.roundedCorners.draw();
	}

	private setLayoutSize() {
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	private drawTicketPaper() {
		const x = this.padding;
		const y = this.padding;
		const width = this.canvas.width - this.padding * 2;
		const height = this.canvas.height - this.padding * 2;

		this.ctx.fillStyle = 'white';

		this.ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
		this.ctx.shadowBlur = 10;
		this.ctx.shadowOffsetX = 1;
		this.ctx.shadowOffsetY = 1;

		this.roundRect(x, y, width, height, this.roundedCornerRadius, 'white');
	}

	private roundRect(
		x: number,
		y: number,
		width: number,
		height: number,
		radius: number,
		color: string,
	) {
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(x + radius, y);
		this.ctx.lineTo(x + width - radius, y);
		this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		this.ctx.lineTo(x + width, y + height - radius);
		this.ctx.quadraticCurveTo(
			x + width,
			y + height,
			x + width - radius,
			y + height,
		);
		this.ctx.lineTo(x + radius, y + height);
		this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		this.ctx.lineTo(x, y + radius);
		this.ctx.quadraticCurveTo(x, y, x + radius, y);
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.restore();
	}
}

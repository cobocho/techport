import type {
	Canvas as NodeCanvas,
	CanvasRenderingContext2D as NodeContext2D,
} from 'canvas';

export type CanvasLike = HTMLCanvasElement | NodeCanvas;

export type Context2DLike = CanvasRenderingContext2D | NodeContext2D;

export class BoardingPass {
	public canvas: CanvasLike;

	private ctx: Context2DLike;

	constructor(canvas: CanvasLike) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d') as Context2DLike;
	}

	draw() {
		if (this.ctx) {
			// draw a circle
			this.ctx.beginPath();
			this.ctx.arc(50, 50, 50, 0, Math.PI * 2);
			this.ctx.fillStyle = 'red';
			this.ctx.fill();
		}
	}
}

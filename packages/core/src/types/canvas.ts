import type {
	Canvas as NodeCanvas,
	CanvasRenderingContext2D as NodeContext2D,
} from 'canvas';

export type CanvasLike = HTMLCanvasElement | NodeCanvas;

export type Context2DLike = CanvasRenderingContext2D | NodeContext2D;

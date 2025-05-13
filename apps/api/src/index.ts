import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { createCanvas } from 'canvas';
import { BoardingPass } from '@techport/core';

const app = new Hono();

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.get('/canvas', (c) => {
	const canvas = createCanvas(100, 100);

	const boardingPass = new BoardingPass(canvas);
	boardingPass.draw();

	return c.body(canvas.toBuffer());
});

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);

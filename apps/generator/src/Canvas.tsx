import { useLayoutEffect, useRef } from 'react';
import { BoardingPass } from '@techport/core';

export const Canvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useLayoutEffect(() => {
		if (canvasRef.current) {
			const canvas = new BoardingPass(canvasRef.current);
			canvas.draw();
		}
	}, []);

	return (
		<canvas
			style={{
				border: '1px solid red',
			}}
			ref={canvasRef}
		/>
	);
};

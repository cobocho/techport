export const getCorner = (
	side: 'top' | 'bottom',
	direction: 'left' | 'right',
) => {
	return side === 'top'
		? direction === 'left'
			? 'top-left'
			: 'top-right'
		: direction === 'left'
			? 'bottom-left'
			: 'bottom-right';
};

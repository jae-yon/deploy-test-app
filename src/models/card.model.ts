export interface Card {
	id: number;
	image?: string;
	header: string;
	main: {
		title?: string;
		description: string;
	};
	footer?: string | React.ReactNode;
	url?: string;
	target?: string;
}

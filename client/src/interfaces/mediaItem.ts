interface Episode {
	_id: string;
	episodeTitle: string;
	episodeCover: string;
	season: string;
	media: string;
	description: string;
	dateCreated: number;
	dateUpladed: number;
}

interface Season {
	_id: string;
	episodes: Episode[];
}

export interface MediaItem {
	_id: string;
	cover: string;
	type: 'movie' | 'show';
	title: string;
	info: {
		director: string;
		cast: string[];
		genres: string[];
		maturityRating: string;
		description: string;
		dateCreated: number;
		dateUpladed: number;
	};
	media?: string;
	seasons?: Season[];
}

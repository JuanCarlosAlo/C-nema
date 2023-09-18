export interface Episode {
	_id: string;
	episodeTitle: string;
	episodeCover: string;
	season: string;
	media: string;
	description: string;
	dateCreated: number;
	dateUpladed: number;
}

export interface Season {
	_id: string;
	episodes: Episode[];
}

export interface MediaItem {
	title: string;
	cover: string;
	info: {
		director: string;
		cast: string[];
		genres: string[];
		maturityRating: string;
		description: string;
		dateCreated: number;
		dateUpladed: number;
	};
	seasons?: Season[];
}

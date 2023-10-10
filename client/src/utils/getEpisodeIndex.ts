import { MediaItem } from '../interfaces/mediaItem';

export const getEpisodeIndex = (
	media: MediaItem,
	seasonActive: number,
	index: number
) => {
	if (!media.seasons) return 0;
	return (
		media.seasons
			.slice(0, seasonActive)
			.reduce((acc, season) => acc + season.episodes.length, 0) + index
	);
};

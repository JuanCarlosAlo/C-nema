import { MediaItem } from '../interfaces/mediaItem';

export const getMediaSeasonsToPlay = (media: MediaItem) => {
	if (!media) return [];

	return media.seasons
		? media.seasons.reduce((acc: { media: string; id: string }[], season) => {
				return [
					...acc,
					...season.episodes.map(episode => ({
						media: episode.media,
						id: episode._id
					}))
				];
		  }, [] as { media: string; id: string }[])
		: [];
};

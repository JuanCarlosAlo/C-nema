import { MediaItem } from '../interfaces/mediaItem';

export const getPlayButtonProps = (info: MediaItem) => {
	if (info) {
		if (info.type === 'show' && info.seasons && info.seasons[0]?.episodes) {
			return info.seasons[0].episodes.map(episode => ({
				media: episode.media,
				id: episode._id
			}));
		} else if (info.media) {
			return [{ media: info.media, id: info._id }];
		}
	}
	return [];
};

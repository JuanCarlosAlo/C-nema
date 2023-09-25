import { MediaItem } from "../interfaces/mediaItem";

export const getMediaProps = (mediaItem:MediaItem ) =>{
    if (!mediaItem) return [];
  
    return mediaItem.seasons
      ? mediaItem.seasons[0].episodes.map(episode => ({
          media: episode.media,
          id: episode._id
        }))
      : mediaItem.media
      ? [{ media: mediaItem.media, id: mediaItem._id }]
      : [];
  }
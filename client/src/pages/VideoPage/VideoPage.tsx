import { Navigate, useLocation } from 'react-router-dom';
import VideoPlayer from '../../components/video-player/VideoPlayer';

const VideoPage = () => {
	const { state } = useLocation();
	if (!state) return <Navigate to={'/'} />;
	console.log(state);

	return <VideoPlayer videos={state.media} videoIndex={state.index} />;
};

export default VideoPage;

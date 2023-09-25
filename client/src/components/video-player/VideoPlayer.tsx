import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import {
	StyledEpisodeButton,
	StyledVideo,
	StyledVideoPlayerContainer,
	VideoContainer
} from './styles';
import { useNavigate } from 'react-router-dom';

interface VideoPlayerProps {
	videos: {
		media: string;
		id: string;
	}[];
	videoIndex: number;
}

const VideoPlayer = ({ videos, videoIndex }: VideoPlayerProps) => {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(videoIndex);
	const [showNextEpisodeButton, setShowNextEpisodeButton] = useState(false);
	const navigate = useNavigate();

	const changeVideo = (index: number) => {
		setCurrentVideoIndex(index);
		if (player) {
			player.pause();
			player.src(videos[index].media);
			player.load();
			player.play();
		}
		navigate('/video/' + videos[index].id, { state: { media: videos, index } });
	};

	const handleVideoEnded = () => {
		if (player) {
			player.pause();
			player.dispose();
		}
	};

	const videoJsOptions = {
		controls: true,
		autoplay: false
	};

	const videoRef = useRef(null);
	const [player, setPlayer] = useState<videojs.Player | null>(null);

	useEffect(() => {
		const videoElement = videoRef.current;

		if (videoElement) {
			const playerInstance = videojs(videoElement, videoJsOptions, () => {
				console.log('Reproductor de video cargado');
			});

			playerInstance.on('ended', handleVideoEnded);

			playerInstance.src(videos[currentVideoIndex].media);
			playerInstance.on('timeupdate', () => {
				// Obtener el tiempo actual del video
				const currentTime = playerInstance.currentTime();

				// Calcular la diferencia entre la duración total del video y el tiempo actual
				const timeRemaining = playerInstance.duration() - currentTime;

				// Establecer si el botón "Next Episode" debe mostrarse
				if (timeRemaining <= 20 && currentVideoIndex + 1 < videos.length) {
					setShowNextEpisodeButton(true);
				} else {
					setShowNextEpisodeButton(false);
				}
			});
		}

		return () => {
			if (player) {
				player.dispose();
			}
		};
	}, [videos, currentVideoIndex]);

	return (
		<StyledVideoPlayerContainer>
			<VideoContainer>
				<StyledVideo ref={videoRef} className='video-js' />
			</VideoContainer>

			{showNextEpisodeButton && (
				<StyledEpisodeButton onClick={() => changeVideo(currentVideoIndex + 1)}>
					Next episode: {currentVideoIndex + 2}
				</StyledEpisodeButton>
			)}
		</StyledVideoPlayerContainer>
	);
};
export default VideoPlayer;

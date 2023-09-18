import { MediaItem } from '../../interfaces/mediaItem';

interface MoreInfoModalProps {
	info?: MediaItem;
	setContent: (content: MediaItem | null) => void;
}

const MoreInfoModal = ({ info, setContent }: MoreInfoModalProps) => {
	return (
		<div>
			<p onClick={() => setContent(null)}>X</p>
			<p>{info?.title}</p>
		</div>
	);
};

export default MoreInfoModal;

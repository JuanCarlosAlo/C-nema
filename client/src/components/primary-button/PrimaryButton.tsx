import { StyledPrimaryButton } from './styles';
import { useNavigate } from 'react-router-dom';

interface PrimaryButtonProps {
	text: string;
	setState?: (value: any) => void;
	setValue?: any;
	url?: string;
	color: string;
	align: string;
	state?: {};
	border?: boolean;
	bgcolor?: string;
}

const PrimaryButton = ({
	text,
	setState,
	setValue,
	url,
	color,
	bgcolor,
	state
}: PrimaryButtonProps) => {
	const navigate = useNavigate();

	return (
		<StyledPrimaryButton
			color={color}
			bgcolor={bgcolor}
			onClick={() => {
				if (setState) setState(setValue);
				if (url) navigate(url, { state });
			}}
		>
			{text}
		</StyledPrimaryButton>
	);
};

export default PrimaryButton;

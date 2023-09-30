import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledButtonContainer } from './styles';

interface SecondaryButtonProps {
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

const SecondaryButton = ({
	text,
	setState,
	setValue,
	url,
	color,
	align,
	state,
	border,
	bgcolor
}: SecondaryButtonProps) => {
	const navigate = useNavigate();

	return (
		<StyledButtonContainer align={align}>
			<StyledButton
				color={color}
				border={border}
				bgcolor={bgcolor}
				onClick={() => {
					if (setState) setState(setValue);
					if (url) navigate(url, { state });
				}}
			>
				{text}
			</StyledButton>
		</StyledButtonContainer>
	);
};

export default SecondaryButton;

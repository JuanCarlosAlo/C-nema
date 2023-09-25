import { StyledIcon } from './styles';

interface IconProps {
	img: string;
	setValue?: (content: any | null) => void;
	value?: any;
	alt: string;
}

const Icon = ({ img, setValue, value, alt }: IconProps) => {
	return (
		<StyledIcon
			onClick={() => setValue && setValue(value)}
			src={img}
			alt={alt}
		/>
	);
};

export default Icon;

import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import {
	StyledInput,
	StyledInputContainer,
	StyledLabel,
	StyledSelect
} from './styles';

interface InputContainerProps {
	keyForm: string;
	label: string;
	type: string;
	register: any;
	formValidation: {};
	errors: any;
	defaultValue?: string | number;
	options?: any[];
}

const InputContainer = ({
	keyForm,
	label,
	type,
	register,
	formValidation,
	errors,
	defaultValue,
	options
}: InputContainerProps) => {
	if (options) {
		return (
			<StyledInputContainer>
				<StyledLabel htmlFor={keyForm}>{label}</StyledLabel>
				<StyledSelect
					name={keyForm}
					id={keyForm}
					{...register(keyForm, formValidation)}
					defaultValue={options[0].TEXT}
				>
					{options.map(option => (
						<option
							defaultValue={option.SELECTED}
							key={option.id}
							value={option.VALUE}
						>
							{option.TEXT}
						</option>
					))}
				</StyledSelect>
				<Text
					color={COLORS.SECONDARY}
					align={MEASUREMENTS.ALIGN.LEFT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					text={errors?.[keyForm]?.message}
				/>
			</StyledInputContainer>
		);
	} else {
		return (
			<StyledInputContainer>
				<StyledLabel htmlFor={keyForm}>{label}</StyledLabel>
				<StyledInput
					type={type}
					name={keyForm}
					id={keyForm}
					{...register(keyForm, formValidation)}
					defaultValue={defaultValue}
				/>
				<Text
					color={COLORS.SECONDARY}
					align={MEASUREMENTS.ALIGN.LEFT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					text={errors?.[keyForm]?.message}
				/>
			</StyledInputContainer>
		);
	}
};

export default InputContainer;

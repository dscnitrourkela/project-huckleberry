import { Light, StyledButton } from './Buttonstyles';

function Button({ method = undefined }) {
	return (
		<>
			<StyledButton>button</StyledButton>
			<StyledButton variant='outline' onClick={method}>
				button
			</StyledButton>
			<Light>disable</Light>
		</>
	);
}

export default Button;
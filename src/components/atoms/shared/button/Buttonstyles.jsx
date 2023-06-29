import styled from 'styled-components';

export const StyledButton = styled.button`
	border-radius: 8px;
	background-color: ${(props) => (props.variant === 'outline' ? '#fff' : '#145EF1')};

	border: 2px solid #145ef1;
	color: ${(props) => (props.variant === 'outline' ? '#145EF1' : '#fff')};
	display: inline-flex;
	height: 50px;
	padding: 12px 48px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
`;

export const Light = styled(StyledButton)`
	border-radius: 8px;
	background: var(--neutral-400, #a6a6a6);
	border: 2px solid #a6a6a6;
	box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;

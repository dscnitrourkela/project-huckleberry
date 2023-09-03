import Link from 'next/link';
import styled from 'styled-components';
import ButtonText from '../Typography/ButtonText';

const stylesMap = {
	primary: {
		color: '#fff',
		backgroundColor: '#145EF1',
		borderColor: '#145EF1',
	},
	secondary: {
		color: '#145EF1',
		backgroundColor: '#fff',
		border: '#145EF1',
	},
	outline: {
		color: '#145EF1',
		backgroundColor: 'transparent',
		borderColor: '#145EF1',
	},
};

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: inherit;
	padding: 8px 30px;
	font-size: 16px;
	font-weight: 600;
	border-radius: 8px;
	border: 2px solid;
	cursor: pointer;
	font-style: normal;
	line-height: 24px;
	letter-spacing: 0.32px;
	text-transform: capitalize;
	transition: all 0.3s ease-in-out;
	${({ variant }) => {
		const { color, backgroundColor, borderColor } = stylesMap[variant];
		return `
      color: ${color};
      background-color: ${backgroundColor};
      border-color: ${borderColor};
    `;
	}}
	height: ${({ height }) => height || 'auto'};
	width: ${({ width }) => width || 'auto'};

	&:hover {
		filter: brightness(1.1);
	}

	&:active {
		filter: brightness(0.8);
	}
	@media (max-width: 768px) {
		display: inline-flex;
		padding: 4px 24px;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		border-radius: 4px;
		font-size: 12px;
		line-height: 20px;
		letter-spacing: 0.28px;
	}
`;

const Button = ({ variant, text, link, onclick, children, disabled, ...props }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		if (onclick && !disabled) {
			onclick();
		}
	};

	return link ? (
		<Link href={link} passHref>
			<Wrapper onClick={handleClick} variant={variant} {...props}>
				<ButtonText>{text}</ButtonText>
				{children}
			</Wrapper>
		</Link>
	) : (
		<Wrapper onClick={handleClick} variant={variant} {...props}>
			<ButtonText aria-disabled={disabled} disabled={disabled}>
				{text}
			</ButtonText>
			{children}
		</Wrapper>
	);
};

export default Button;

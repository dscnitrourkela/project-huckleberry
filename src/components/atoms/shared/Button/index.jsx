import Link from 'next/link';
import styled from 'styled-components';
import ButtonText from '../Typography/ButtonText';

const stylesMap = {
	button: {
		color: '#fff',
		backgroundColor: '#145EF1',
		borderColor: '#145EF1',
	},
	submit: {
		color: '#145EF1',
		backgroundColor: '#fff',
		border: '#145EF1',
	},
	reset: {
		color: '#fff',
		backgroundColor: '#A6A6A6',
		borderColor: '#A6A6A6',
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
	${({ type }) => {
		const { color, backgroundColor, borderColor } = stylesMap[type];
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

const Button = ({ type, text, link, onclick, children, width, height, disabled }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		if (onclick && !disabled) {
			onclick();
		}
	};

	return link ? (
		<Link href={link} passHref>
			<Wrapper type={disabled ? 'disabled' : type} width={width} height={height} onClick={handleClick}>
				<ButtonText>{text}</ButtonText>
				{children}
			</Wrapper>
		</Link>
	) : (
		<Wrapper type={disabled ? 'disabled' : type} width={width} height={height} onClick={handleClick}>
			<ButtonText aria-disabled={disabled} disabled={disabled}>
				{text}
			</ButtonText>
			{children}
		</Wrapper>
	);
};

export default Button;

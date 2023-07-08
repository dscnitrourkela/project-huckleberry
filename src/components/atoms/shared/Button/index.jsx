import Link from 'next/link';
import styled from 'styled-components';
import ButtonText from '../Typography/ButtonText';

const stylesMap = {
	primary: {
		color: '#fff',
		backgroundColor: '#145EF1',
		borderColor: '#145EF1',
	},
	outline: {
		color: '#145EF1',
		backgroundColor: '#fff',
		borderColor: '#145EF1',
	},
	disabled: {
		color: '#fff',
		backgroundColor: '#A6A6A6',
		borderColor: 'none',
	},
};

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 48px;
	font-size: 16px;
	font-weight: 600;
	border-radius: 8px;
	border: 2px solid;
	cursor: pointer;
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
		filter: brightness(0.9);
	}

	&:active {
		filter: brightness(0.8);
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
